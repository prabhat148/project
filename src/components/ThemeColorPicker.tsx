import React from 'react';
import { useTheme } from '../context/ThemeContext';

const themes = [
  { name: 'blue', color: '#3B82F6' },
  { name: 'green', color: '#10B981' },
  { name: 'purple', color: '#8B5CF6' },
  { name: 'rose', color: '#F43F5E' },
] as const;

 const ThemeColorPicker = () => {
  const { colorTheme, setColorTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {themes.map(({ name, color }) => (
        <button
          key={name}
          onClick={() => setColorTheme(name as any)}
          className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${
            colorTheme === name ? 'scale-125 ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600' : ''
          }`}
          style={{ backgroundColor: color }}
          aria-label={`Switch to ${name} theme`}
        />
      ))}
    </div>
  );
};

export default ThemeColorPicker ;