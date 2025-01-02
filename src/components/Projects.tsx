import React from 'react';
import ProjectCard from './ProjectCard';
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration",
    tech: ["React", "Node.js", "MongoDB"],
    image:"/src/public/ecommerse.jpg",
    link: "https://github.com/prabhat148/eccomers.git"
  },
  {
    title: "E-commerce  Backend API",
    description: "A collaborative Ecommerse management application with real-time updates",
    tech: ["Node.js", "JWT", "Postman", "MongoDB"],
    image: "/src/public/ecommersre_Api.jpg",
    link: "https://github.com/prabhat148/eccomersApi.git"
  },
  {
    title: "A wesbite for a Dogs Lover",
    description: "Meet new and interesting dogs nearby",
    tech: ["HTML", "CSS", "JavaScript",'BOOTSTRAP'],
    image: "/src/public/Tindog.jpg",
    link: "https://prabhat148.github.io/tindog"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;