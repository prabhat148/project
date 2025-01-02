import React from 'react';
import { useTheme } from '../context/ThemeContext';
var themes = [
    { name: 'blue', color: '#3B82F6' },
    { name: 'green', color: '#10B981' },
    { name: 'purple', color: '#8B5CF6' },
    { name: 'rose', color: '#F43F5E' },
];
var ThemeColorPicker = function () {
    var _a = useTheme(), colorTheme = _a.colorTheme, setColorTheme = _a.setColorTheme;
    return (React.createElement("div", { className: "flex items-center gap-2" }, themes.map(function (_a) {
        var name = _a.name, color = _a.color;
        return (React.createElement("button", { key: name, onClick: function () { return setColorTheme(name); }, className: "w-6 h-6 rounded-full transition-transform hover:scale-110 ".concat(colorTheme === name ? 'scale-125 ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600' : ''), style: { backgroundColor: color }, "aria-label": "Switch to ".concat(name, " theme") }));
    })));
};
export default ThemeColorPicker;
