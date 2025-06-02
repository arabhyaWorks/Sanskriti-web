import React from 'react';
import { Sun, Moon } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#FA9401] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <a href="#main-content" className="hover:underline">
              मुख्य कंटेंट में जाएं
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hidden md:inline hover:underline">
              स्क्रीन रीडर एक्सेस
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="hover:underline text-sm" aria-label="Decrease font size">A-</button>
              <button className="hover:underline text-base" aria-label="Normal font size">A</button>
              <button className="hover:underline text-lg" aria-label="Increase font size">A+</button>
            </div>
            <span className="hidden md:inline">|</span>
            <button 
              className="flex items-center gap-1 hover:underline"
              aria-label="Toggle dark mode"
            >
              <Sun className="w-4 h-4" />
            </button>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">हिंदी</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;