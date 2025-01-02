import React, { createContext, useContext, useState, useEffect } from 'react';
var ThemeContext = createContext(undefined);
export var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState(function () {
        var saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    }), isDarkMode = _b[0], setIsDarkMode = _b[1];
    var _c = useState(function () {
        var saved = localStorage.getItem('colorTheme');
        return saved || 'blue';
    }), colorTheme = _c[0], setColorTheme = _c[1];
    useEffect(function () {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        localStorage.setItem('colorTheme', colorTheme);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
        document.documentElement.setAttribute('data-theme', colorTheme);
    }, [isDarkMode, colorTheme]);
    var toggleTheme = function () {
        setIsDarkMode(!isDarkMode);
    };
    return (React.createElement(ThemeContext.Provider, { value: { isDarkMode: isDarkMode, colorTheme: colorTheme, toggleTheme: toggleTheme, setColorTheme: setColorTheme } }, children));
};
export var useTheme = function () {
    var context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
