"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Background canvas placeholder */}
      <div id="canvas-container" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className="py-6 px-4 md:px-8 absolute top-0 left-0 right-0 z-20">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-cyan-400">Cyber</span>Tech
            </div>
            <div className="hidden md:flex space-x-6 text-gray-300">
              <a
                href="#home"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#internships"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Internships
              </a>
              <a
                href="#careers"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Careers
              </a>
              <Link
                href="/our-team"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Our Team
              </Link>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main>
          <section className="hero-container">
            {/* Parallax layers */}
            <div className="parallax-layer layer-6"></div>
            <div className="parallax-layer layer-5"></div>
            <div className="parallax-layer layer-4"></div>
            <div className="parallax-layer bike-1"></div>
            <div className="parallax-layer bike-2"></div>
            <div className="parallax-layer layer-3"></div>
            <div className="parallax-layer layer-2"></div>
            <div className="parallax-layer layer-1"></div>

            {/* Hero text */}
            <div className="hero-content">
              <h1 className="hero-title text-5xl md:text-7xl font-bold mb-4">
                Welcome to the <span className="text-blue-700">Future</span>
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Exploring the cutting edge of 3D, technology, and robotics.
              </p>
              <button className="bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-cyan-500/50 transform transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:scale-105 hover:shadow-cyan-glow">
                Get Started
              </button>
            </div>
          </section>
        </main>

        {/* Featured Technology Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Featured Technology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-glow">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Autonomous Robots
              </h3>
              <p className="text-gray-300">
                Advanced robotics systems capable of learning and adapting to
                their environment.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-glow">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Neural AI Core
              </h3>
              <p className="text-gray-300">
                Our central AI core processes petabytes of data for predictive
                analytics.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-cyan-glow">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                3D Holo-Display
              </h3>
              <p className="text-gray-300">
                Interactive holographic technology that brings digital models
                into the real world.
              </p>
            </div>
          </div>
        </section>

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
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#internships"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Internships
                    </a>
                  </li>
                  <li>
                    <a
                      href="#careers"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Company
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      About Us
                    </a>
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
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-t border-slate-700 my-8" />

            <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">
              <p>&copy; 2025 CyberTech Nexus. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
