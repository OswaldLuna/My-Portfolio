import React from 'react';
import { useTheme } from '../hooks/useTheme';


const ThemeToggle: React.FC= () => {

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full hover:bg-purple-500/20 transition-all duration-300"
      aria-label="Toggle theme"
      type="button"
    >
      <div className="relative w-6 h-6">
        {/* Sun SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 transform transition-transform duration-500 ${
            isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            className="text-purple-400"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        
        {/* Moon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 transform transition-transform duration-500 ${
            !isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            className="text-purple-600"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  );
};

export default ThemeToggle;