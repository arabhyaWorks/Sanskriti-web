import { useState } from 'react';

export default function DepartmentHeader() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>Skip to Main Content</span>
            <span>|</span>
            <span>Screen Reader Access</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-blue-200">A-</button>
            <button className="hover:text-blue-200">A</button>
            <button className="hover:text-blue-200">A+</button>
            <span>|</span>
            <button className="hover:text-blue-200">हिंदी</button>
          </div>
        </div>
      </div>
    </header>
  );
}