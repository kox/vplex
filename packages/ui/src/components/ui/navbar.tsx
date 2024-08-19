import React from 'react';

export const Navbar = () => {
  return (
    <nav className="tw-bg-white tw-border-b tw-shadow-sm tw-p-4">
      <div className="tw-container tw-mx-auto tw-flex tw-items-center tw-justify-between">
        <div className="tw-text-lg tw-font-semibold">
          <a href="/" className="tw-text-gray-800">
            {/* <img src="/vite.svg" alt="Logo" className="tw-h-8 tw-inline-block" /> */}
            Platform Name
          </a>
        </div>
      </div>
    </nav>
  );
};
