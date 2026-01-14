"use client";

import { WorldMap } from "@/components/ui/map";
import { Users, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const teamLocations = [
  {
    city: "San Francisco, USA",
    department: "AI Research & Development",
    employees: "120+",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    coords: { lat: 37.7749, lng: -122.4194 },
  },
  {
    city: "London, UK",
    department: "Robotics Engineering",
    employees: "85+",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    coords: { lat: 51.5074, lng: -0.1278 },
  },
  {
    city: "New Delhi, India",
    department: "Software Development",
    employees: "150+",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
    coords: { lat: 28.6139, lng: 77.209 },
  },
  {
    city: "Tokyo, Japan",
    department: "Hardware Innovation",
    employees: "95+",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    coords: { lat: 35.6762, lng: 139.6503 },
  },
  {
    city: "Sydney, Australia",
    department: "Data Science",
    employees: "60+",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop",
    coords: { lat: -33.8688, lng: 151.2093 },
  },
  {
    city: "São Paulo, Brazil",
    department: "3D Simulation",
    employees: "70+",
    image: "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=800&h=600&fit=crop",
    coords: { lat: -23.5505, lng: -46.6333 },
  },
];

const mapConnections = [
  {
    start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  },
  {
    start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
  },
  {
    start: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
    end: { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
  },
  {
    start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
    end: { lat: 40.7128, lng: -74.006, label: "New York" },
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 -z-10" />

      {/* Header */}
      <header className="py-6 px-4 md:px-8 relative z-20">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-cyan-400">Cyber</span>Tech
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Global <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A distributed team of innovators working around the clock to build
            the future of technology
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="glass-card p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-glow">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
            <p className="text-gray-300">Team Members</p>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-glow">
            <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">25+</h3>
            <p className="text-gray-300">Countries</p>
          </div>
          <div className="glass-card p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-glow">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-300">Global Coverage</p>
          </div>
        </motion.div>

        {/* World Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Global Innovation Network
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Our teams are strategically located across the globe, enabling
            round-the-clock innovation and collaboration
          </p>
          <div className="glass-card p-8 rounded-2xl">
            <WorldMap
              dots={mapConnections}
              lineColor="#06b6d4"
              showLabels={true}
              animationDuration={3}
              loop={true}
            />
          </div>
        </motion.div>

        {/* Team Locations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamLocations.map((location, idx) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                className="career-card glass-card rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {location.city}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-2">
                    {location.department}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      {location.employees}
                    </span>{" "}
                    Employees
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="glass-card p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Global Team
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of a diverse, innovative team working on cutting-edge
            technology that shapes the future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-cyan-500/50 transform transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-cyan-glow">
              View Open Positions
            </button>
            <button className="bg-slate-700 text-cyan-300 font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:bg-slate-600 hover:text-cyan-200">
              Learn More
            </button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-24">
        <div className="glass-card container mx-auto rounded-t-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-cyan-400">Cyber</span>Tech
              </h3>
              <p className="text-gray-400 max-w-sm">
                Pioneering the next generation of robotics, artificial
                intelligence, and 3D simulation to build a better future.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Explore
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#internships"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Internships
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#careers"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#about"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-t border-slate-700 my-8" />

          <div className="text-center text-gray-500">
            <p>&copy; 2025 CyberTech Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
