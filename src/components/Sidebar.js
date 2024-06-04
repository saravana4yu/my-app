import React, { useState } from "react";
import { FaFolder, FaSuitcase, FaTag, FaCog, FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col justify-between items-center py-8">
      <div className="w-full flex flex-col items-center">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold">gig share</h1>
        </div>
        <div className="flex flex-col items-center mb-10">
          <img
            src="path_to_image.jpg"  // replace with actual path or a placeholder
            alt="User"
            className="rounded-full w-20 h-20 mb-4"
          />
          <h2 className="text-xl font-semibold">Jennifer Ross</h2>
        </div>
        <nav className="flex flex-col items-start w-full space-y-4 px-16">
          <a href="#" className="flex items-center space-x-2 hover:text-gray-400 w-full">
            <FaSuitcase />
            <span>Dashboard</span>
          </a>
          <div className="relative w-full">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full hover:text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <FaFolder />
                <span>Folders</span>
              </div>
              <svg
                className={`transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col items-start w-full rounded-lg mt-2 space-y-2 px-4 py-2">
                <a href="#" className="flex items-center space-x-2 hover:text-gray-400 w-full">
                  <span className="h-2 w-2 bg-green-500"></span>
                  <span>Marketing</span>
                </a>
                <a href="#" className="flex items-center space-x-2 hover:text-gray-400 w-full">
                  <span className="h-2 w-2 bg-yellow-500"></span>
                  <span>Design</span>
                </a>
                <a href="#" className="flex items-center space-x-2 hover:text-gray-400 w-full">
                  <span className="h-2 w-2 bg-red-500"></span>
                  <span>Webflow</span>
                </a>
              </div>
            )}
          </div>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-400 w-full">
            <FaTag />
            <span>Favorites</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-400 w-full">
            <FaCog />
            <span>Settings</span>
          </a>
        </nav>
      </div>
      <div className="w-full px-16">
        <div className="relative border-dashed border-2 border-gray-500 rounded-lg p-4 h-44 flex flex-col items-center">
          <div className="text-gray-400">Add files</div>
          <div className="text-gray-400 text-sm">Up to 20 GB</div>
          <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-700 absolute bottom-10">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
