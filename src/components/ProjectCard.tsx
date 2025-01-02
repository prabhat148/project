import React from 'react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

const ProjectCard = ({ title, description, tech, image, link }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tech, i) => (
            <span 
              key={i} 
              className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark transition-colors"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard