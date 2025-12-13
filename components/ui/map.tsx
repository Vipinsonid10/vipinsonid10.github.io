"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  labelClassName?: string;
  animationDuration?: number;
  loop?: boolean;
}

export function WorldMap({
  dots = [],
  lineColor = "#06b6d4",
  showLabels = true,
  labelClassName = "",
  animationDuration = 3,
  loop = true,
}: MapProps) {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const [svgMap, setSvgMap] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    try {
      const mapInstance = new DottedMap({ height: 100, grid: "diagonal" });
      
      // Add all location pins
      const allLocations = new Set<string>();
      dots.forEach((dot) => {
        const startKey = `${dot.start.lat},${dot.start.lng}`;
        const endKey = `${dot.end.lat},${dot.end.lng}`;
        allLocations.add(startKey);
        allLocations.add(endKey);
      });

      allLocations.forEach((loc) => {
        const [lat, lng] = loc.split(",").map(Number);
        mapInstance.addPin({ lat, lng, svgOptions: { color: lineColor, radius: 0.8 } });
      });

      const svgString = mapInstance.getSVG({
        radius: 0.22,
        color: theme === "dark" ? "#334155" : "#94a3b8",
        shape: "circle",
        backgroundColor: "transparent",
      });

      setSvgMap(svgString);
    } catch (error) {
      console.error("Error creating dotted map:", error);
    }
  }, [dots, lineColor, theme, isMounted]);

  // Convert lat/lng to SVG coordinates using Mercator projection
  const latLngToSvg = (lat: number, lng: number): { x: number; y: number } => {
    // Map width and height
    const width = 800;
    const height = 400;
    
    // Convert longitude to x (simple linear mapping)
    const x = ((lng + 180) * width) / 360;
    
    // Convert latitude to y using Mercator projection
    const latRad = (lat * Math.PI) / 180;
    const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = height / 2 - (width * mercN) / (2 * Math.PI);
    
    return { x, y };
  };

  // Function to create curved path between two points
  const createCurvedPath = (
    start: { lat: number; lng: number },
    end: { lat: number; lng: number }
  ) => {
    const startPoint = latLngToSvg(start.lat, start.lng);
    const endPoint = latLngToSvg(end.lat, end.lng);

    const { x: x1, y: y1 } = startPoint;
    const { x: x2, y: y2 } = endPoint;

    // Calculate control point for curve
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const curvature = distance * 0.3;

    // Perpendicular offset for curve
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const offsetX = Math.sin(angle) * curvature;
    const offsetY = -Math.cos(angle) * curvature;

    const controlX = midX + offsetX;
    const controlY = midY + offsetY;

    return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
  };

  const getLocationPosition = (location: { lat: number; lng: number }) => {
    return latLngToSvg(location.lat, location.lng);
  };

  return (
    <div className="w-full aspect-[2/1] relative">
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full"
        dangerouslySetInnerHTML={{ __html: svgMap }}
      />
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute top-0 left-0 pointer-events-none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Draw curved paths */}
        {dots.map((dot, idx) => {
          const path = createCurvedPath(dot.start, dot.end);
          if (!path) return null;

          return (
            <g key={`path-${idx}`}>
              {/* Base path */}
              <motion.path
                d={path}
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              {/* Animated path */}
              <motion.path
                d={path}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: loop ? [0, 1] : 1 }}
                transition={{
                  duration: animationDuration,
                  repeat: loop ? Infinity : 0,
                  ease: "linear",
                  delay: idx * 0.5,
                }}
              />
            </g>
          );
        })}

        {/* Draw pulsing markers */}
        {dots.flatMap((dot, idx) => {
          const startPos = getLocationPosition(dot.start);
          const endPos = getLocationPosition(dot.end);

          return [
            // Start location
            <g key={`marker-start-${idx}`}>
              <motion.circle
                cx={startPos.x}
                cy={startPos.y}
                r="3"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <circle
                cx={startPos.x}
                cy={startPos.y}
                r="2"
                fill={lineColor}
                className="cursor-pointer"
              />
            </g>,
            // End location
            <g key={`marker-end-${idx}`}>
              <motion.circle
                cx={endPos.x}
                cy={endPos.y}
                r="3"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <circle
                cx={endPos.x}
                cy={endPos.y}
                r="2"
                fill={lineColor}
                className="cursor-pointer"
              />
            </g>,
          ];
        })}

        {/* Labels */}
        {showLabels &&
          dots.flatMap((dot) => {
            const startPos = getLocationPosition(dot.start);
            const endPos = getLocationPosition(dot.end);

            return [
              dot.start.label && (
                <text
                  key={`label-start-${dot.start.label}`}
                  x={startPos.x}
                  y={startPos.y - 8}
                  textAnchor="middle"
                  className={`fill-gray-300 text-xs ${labelClassName}`}
                >
                  {dot.start.label}
                </text>
              ),
              dot.end.label && (
                <text
                  key={`label-end-${dot.end.label}`}
                  x={endPos.x}
                  y={endPos.y - 8}
                  textAnchor="middle"
                  className={`fill-gray-300 text-xs ${labelClassName}`}
                >
                  {dot.end.label}
                </text>
              ),
            ];
          })}
      </svg>
    </div>
  );
}
