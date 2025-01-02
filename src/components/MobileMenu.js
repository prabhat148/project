import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
var MobileMenu = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var menuItems = [
        { href: "#about", label: "About" },
        { href: "#qualification", label: "Qualification" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];
    return (React.createElement(AnimatePresence, null, isOpen && (React.createElement(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, className: "absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg" },
        React.createElement("nav", { className: "py-4" }, menuItems.map(function (item) { return (React.createElement("a", { key: item.href, href: item.href, onClick: onClose, className: "block px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" }, item.label)); }))))));
};
export default MobileMenu;
