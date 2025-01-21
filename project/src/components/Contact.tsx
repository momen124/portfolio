import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                {/* Updated icon color */}
                <Mail className="w-6 h-6 text-indigo-600 mr-4" />
                <a
                  href="mailto:john.doe@example.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                >
                  john.doe@example.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-indigo-600 mr-4" />
                <span className="text-gray-700 dark:text-gray-300">
                  San Francisco, CA
                </span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://github.com"
                  className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 dark:text-gray-100 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full px-4 py-2 border border-gray-300
                  dark:border-gray-700
                  rounded-lg focus:ring-2
                  focus:ring-indigo-500 focus:border-transparent
                  bg-white dark:bg-gray-800
                  text-gray-800 dark:text-gray-200
                "
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 dark:text-gray-100 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full px-4 py-2 border border-gray-300
                  dark:border-gray-700
                  rounded-lg focus:ring-2
                  focus:ring-indigo-500 focus:border-transparent
                  bg-white dark:bg-gray-800
                  text-gray-800 dark:text-gray-200
                "
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 dark:text-gray-100 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="
                  w-full px-4 py-2 border border-gray-300
                  dark:border-gray-700
                  rounded-lg focus:ring-2
                  focus:ring-indigo-500 focus:border-transparent
                  bg-white dark:bg-gray-800
                  text-gray-800 dark:text-gray-200
                "
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="
                w-full bg-indigo-600 text-white py-3 px-6
                rounded-lg hover:bg-indigo-500
                transition-colors
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
