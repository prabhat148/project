import React from 'react';
import { motion } from 'framer-motion';
var experiences = [
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
var Experience = function () {
    return (React.createElement("section", { id: "experience", className: "py-20 bg-white dark:bg-gray-900 transition-colors" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("h2", { className: "text-3xl font-bold text-center mb-12 dark:text-white" }, "Experience"),
            React.createElement("div", { className: "max-w-3xl mx-auto" }, experiences.map(function (exp, index) { return (React.createElement(motion.div, { key: index, initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: index * 0.2 }, className: "mb-8 border-l-4 border-blue-600 dark:border-blue-400 pl-6" },
                React.createElement("h3", { className: "text-xl font-semibold dark:text-white" }, exp.role),
                React.createElement("p", { className: "text-blue-600 dark:text-blue-400 mt-1" }, exp.company),
                React.createElement("p", { className: "text-gray-500 dark:text-gray-400 text-sm mt-1" }, exp.duration),
                React.createElement("ul", { className: "mt-3 space-y-2" }, exp.responsibilities.map(function (resp, i) { return (React.createElement("li", { key: i, className: "text-gray-600 dark:text-gray-300" },
                    "\u2022 ",
                    resp)); })))); })))));
};
export default Experience;
