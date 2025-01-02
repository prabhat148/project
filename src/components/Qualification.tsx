import React from 'react';
import { motion } from 'framer-motion';

const qualifications = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "DR.Abdul Kalam Technical University ,UTTAR PRADESH",
    year: "2018",
    grade: "61 %"
  },
  {
    degree: "Inermediate ",
    institution: "Narion Board of Open Schooling",
    year: "2010",
    grade: "50%"
  },
  {
    degree: "High School",
    institution: "CBSE BOARD",
    year: "2010",
    grade: "50%"
  }
];

const Qualification = () => {
  return (
    <section id="qualification" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Qualifications</h2>
        <div className="max-w-3xl mx-auto">
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{qual.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{qual.institution}</p>
              <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{qual.year}</span>
                <span>{qual.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;