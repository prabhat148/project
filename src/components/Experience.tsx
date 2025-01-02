import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Backend Developer",
    company: "itax easy",
    duration: "Dec 2023 - May 2024",
    responsibilities: [
      "Led development of key features using React and Node.js",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40%"
    ]
  },
  {
    role: "Intership",
    company: "SattirMind Solution PVT LTD",
    duration: "Jan 2023 - Jun 2023",
    responsibilities: [
      "Developed full-stack applications using MERN stack",
      "Implemented responsive designs and UI components",
      "Collaborated with cross-functional teams"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 border-l-4 border-blue-600 dark:border-blue-400 pl-6"
            >
              <h3 className="text-xl font-semibold dark:text-white">{exp.role}</h3>
              <p className="text-blue-600 dark:text-blue-400 mt-1">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.duration}</p>
              <ul className="mt-3 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">• {resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;