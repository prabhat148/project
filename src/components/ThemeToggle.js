import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
var ThemeToggle = function () {
    var _a = useTheme(), isDarkMode = _a.isDarkMode, toggleTheme = _a.toggleTheme;
    return (React.createElement("button", { onClick: toggleTheme, className: "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors", "aria-label": "Toggle theme" }, isDarkMode ? (React.createElement(FaSun, { className: "text-2xl text-yellow-400" })) : (React.createElement(FaMoon, { className: "text-2xl text-gray-600" }))));
};
export default ThemeToggle;
