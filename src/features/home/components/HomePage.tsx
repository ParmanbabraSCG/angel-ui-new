import React from 'react';
import Button from '../../../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 md:pr-8 text-center md:text-left mb-6 md:mb-0">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Label goes here</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Best burger in town
          </h1>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
            Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.
          </p>
          <Button
            variant="outline"
            size="md"
            className="border-gray-400 text-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            onClick={() => console.log('Explore button clicked')}
          >
            Explore
          </Button>
        </div>

        {/* Right Section - Image Placeholder */}
        <div className="md:w-1/2 w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-md border border-dashed border-gray-400 dark:border-gray-600">
          <svg
            className="w-24 h-24 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3H4.5zm0 2.25a.75.75 0 00-.75.75v8.25a.75.75 0 00.75.75h15a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75H4.5zM12 9a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0112 9zm-3 2.25a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm6 0a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zM8.25 12a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm7.5 0a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 