var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import ProjectCard from './ProjectCard';
var projects = [
    {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with cart, checkout, and payment integration",
        tech: ["React", "Node.js", "MongoDB"],
        image: "/src/public/ecommerse.jpg",
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
        tech: ["HTML", "CSS", "JavaScript", 'BOOTSTRAP'],
        image: "/src/public/Tindog.jpg",
        link: "https://prabhat148.github.io/tindog"
    }
];
var Projects = function () {
    return (React.createElement("section", { id: "projects", className: "py-20 bg-white dark:bg-gray-900" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("h2", { className: "text-3xl font-bold text-center mb-12 dark:text-white" }, "My Projects"),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, projects.map(function (project, index) { return (React.createElement(ProjectCard, __assign({ key: index }, project))); })))));
};
export default Projects;
