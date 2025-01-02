import React from 'react';
import { motion } from 'framer-motion';
import DownloadButton from './DownloadButton';
var Hero = function () {
    return (React.createElement("section", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 transition-colors" },
        React.createElement(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center px-4" },
            React.createElement("h1", { className: "text-5xl font-bold text-gray-900 dark:text-white mb-6" },
                "Hi, I'm ",
                React.createElement("span", { className: "text-primary" }, "Prabhat Kumar")),
            React.createElement("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-8" }, "Full Stack Developer | UI/UX Enthusiast | Problem Solver"),
            React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 justify-center" },
                React.createElement("a", { href: "#contact", className: "bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-colors" }, "Get in Touch"),
                React.createElement(DownloadButton, { url: "https://drive.google.com/file/d/1nqWIAu9ViiFNhAVrfHXQuzMv3esLWCxT/view?usp=sharing" })))));
};
export default Hero;
