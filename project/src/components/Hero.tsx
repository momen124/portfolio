import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="
        min-h-screen
        flex items-center justify-center
        bg-gradient-to-br from-gray-50 to-gray-100
        dark:from-gray-800 dark:to-gray-900
        pt-16
        transition-colors
      "
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              John Doe
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Crafting elegant solutions to complex problems with clean, efficient code.
              Specialized in React, Node.js, and modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#contact"
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
              alt="John Doe"
              className="rounded-full w-64 h-64 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
