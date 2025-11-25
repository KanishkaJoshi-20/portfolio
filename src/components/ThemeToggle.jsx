import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

function ThemeToggle() {
    // default to dark
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            // default to dark when no saved theme (or savedTheme === 'dark')
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            if (!savedTheme) {
                // persist default dark for future visits (optional)
                localStorage.setItem('theme', 'dark');
            }
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

  return (
    <button onClick={toggleTheme} className={cn("fixed top-5 right-16 md:right-5 z-9999 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden")}>
      {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-900'/>}
    </button>
  )
}

export default ThemeToggle