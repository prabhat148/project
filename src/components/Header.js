import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import ThemeColorPicker from './ThemeColorPicker';
import MobileMenu from './MobileMenu';
var Header = function () {
    var _a = useState(false), isMobileMenuOpen = _a[0], setIsMobileMenuOpen = _a[1];
    return (React.createElement("header", { className: "fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors" },
        React.createElement("nav", { className: "container mx-auto px-6 py-4" },
            React.createElement("div", { className: "flex justify-between items-center" },
                React.createElement("h1", { className: "text-2xl font-bold text-gray-800 dark:text-white" }, "Prabhat Kumar"),
                React.createElement("div", { className: "flex items-center gap-4" },
                    React.createElement(ThemeColorPicker, null),
                    React.createElement(ThemeToggle, null),
                    React.createElement("button", { onClick: function () { return setIsMobileMenuOpen(!isMobileMenuOpen); }, className: "md:hidden p-2 text-gray-600 dark:text-gray-300" }, isMobileMenuOpen ? React.createElement(FaTimes, { size: 24 }) : React.createElement(FaBars, { size: 24 })),
                    React.createElement("div", { className: "hidden md:flex items-center gap-6" },
                        React.createElement("a", { href: "#about", className: "text-gray-600 dark:text-gray-300 hover:text-primary" }, "About"),
                        React.createElement("a", { href: "#qualification", className: "text-gray-600 dark:text-gray-300 hover:text-primary" }, "Qualification"),
                        React.createElement("a", { href: "#experience", className: "text-gray-600 dark:text-gray-300 hover:text-primary" }, "Experience"),
                        React.createElement("a", { href: "#projects", className: "text-gray-600 dark:text-gray-300 hover:text-primary" }, "Projects"),
                        React.createElement("a", { href: "#contact", className: "text-gray-600 dark:text-gray-300 hover:text-primary" }, "Contact"),
                        React.createElement("div", { className: "flex items-center gap-4" },
                            React.createElement("a", { href: "https://github.com/prabhat148", target: "_blank", rel: "noopener noreferrer" },
                                React.createElement(FaGithub, { className: "text-2xl text-gray-600 dark:text-gray-300 hover:text-primary" })),
                            React.createElement("a", { href: "https://linkedin.com/in/prabhat-kumar-5444b5196", target: "_blank", rel: "noopener noreferrer" },
                                React.createElement(FaLinkedin, { className: "text-2xl text-gray-600 dark:text-gray-300 hover:text-primary" })))))),
            React.createElement(MobileMenu, { isOpen: isMobileMenuOpen, onClose: function () { return setIsMobileMenuOpen(false); } }))));
};
export default Header;
