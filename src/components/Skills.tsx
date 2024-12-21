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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Layout className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <Database className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Database</h3>
            <ul className="space-y-2">
              {skills.database.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <Terminal className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
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