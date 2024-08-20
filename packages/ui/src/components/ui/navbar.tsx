import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold">
          <a href="/" className="text-gray-800">
            {/* <img src="/vite.svg" alt="Logo" className="h-8 inline-block" /> */}
            Platform Name
          </a>
        </div>
      </div>
    </nav>
  );
};
