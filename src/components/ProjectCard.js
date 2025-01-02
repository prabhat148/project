import React from 'react';
import { motion } from 'framer-motion';
var ProjectCard = function (_a) {
    var title = _a.title, description = _a.description, tech = _a.tech, image = _a.image, link = _a.link;
    return (React.createElement(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg" },
        React.createElement("div", { className: "aspect-video overflow-hidden" },
            React.createElement("img", { src: image, alt: title, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300" })),
        React.createElement("div", { className: "p-6" },
            React.createElement("h3", { className: "text-xl font-semibold mb-2 dark:text-white" }, title),
            React.createElement("p", { className: "text-gray-600 dark:text-gray-300 mb-4" }, description),
            React.createElement("div", { className: "flex flex-wrap gap-2 mb-4" }, tech.map(function (tech, i) { return (React.createElement("span", { key: i, className: "bg-primary/10 text-primary text-sm px-3 py-1 rounded-full" }, tech)); })),
            React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:text-primary-dark transition-colors" }, "View Project \u2192"))));
};
export default ProjectCard;
