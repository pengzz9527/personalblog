import React from 'react';

const LoadingSpinner = ({ size = 'md', text = '加载中...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 mb-4`}></div>
      {text && (
        <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;

