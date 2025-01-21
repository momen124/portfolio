import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Example changes:
 *  - Card background changed to a gradient with new colors
 *  - Rounded corners, a more pronounced shadow, and a hover scale effect
 *  - Font changed to a custom class "font-poppins" (see notes below)
 */

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking application with detailed forecasts and maps.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for tracking social media engagement and growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-20 bg-white dark:bg-gray-800 transition-colors font-poppins"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Portfolio
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                rounded-xl shadow-xl overflow-hidden
                bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700
                hover:scale-[1.02] transform transition-transform
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center text-blue-600 hover:text-blue-500"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-100"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
