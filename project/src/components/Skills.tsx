import React from 'react';
import { Code, Database, Layout, Terminal } from 'lucide-react';

const Skills = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'],
    backend: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
    database: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
    tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest'],
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 font-poppins transition-colors"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Layout className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Frontend
            </h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Backend
            </h3>
            <ul className="space-y-2">
              {skills.backend.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Database */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Database className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Database
            </h3>
            <ul className="space-y-2">
              {skills.database.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Terminal className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Tools
            </h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
