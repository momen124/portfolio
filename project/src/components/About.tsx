import React from 'react';
import { BookOpen, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Background</h3>
            <p className="text-gray-600 dark:text-gray-300">
              With over 5 years of experience in full-stack development, I've worked on
              diverse projects ranging from e-commerce platforms to enterprise applications.
              My journey in tech started with a Computer Science degree and has evolved
              through continuous learning and practical experience.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p className="text-gray-600 dark:text-gray-300">
              BSc in Computer Science<br />
              Tech University (2018-2022)<br />
              Relevant coursework in algorithms, data structures, and software engineering.
              Multiple certifications in modern web technologies.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Goals</h3>
            <p className="text-gray-600 dark:text-gray-300">
              My goal is to create impactful software solutions that solve real-world
              problems. I'm passionate about clean code, user experience, and staying
              current with emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
