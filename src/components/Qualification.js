import React from 'react';
import { motion } from 'framer-motion';
var qualifications = [
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
var Qualification = function () {
    return (React.createElement("section", { id: "qualification", className: "py-20 bg-gray-50 dark:bg-gray-800 transition-colors" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("h2", { className: "text-3xl font-bold text-center mb-12 dark:text-white" }, "Qualifications"),
            React.createElement("div", { className: "max-w-3xl mx-auto" }, qualifications.map(function (qual, index) { return (React.createElement(motion.div, { key: index, initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: index * 0.2 }, className: "mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md" },
                React.createElement("h3", { className: "text-xl font-semibold text-blue-600 dark:text-blue-400" }, qual.degree),
                React.createElement("p", { className: "text-gray-600 dark:text-gray-300 mt-2" }, qual.institution),
                React.createElement("div", { className: "flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400" },
                    React.createElement("span", null, qual.year),
                    React.createElement("span", null, qual.grade)))); })))));
};
export default Qualification;
