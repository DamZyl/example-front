import React from 'react';

export const Loader = () => {
  const circleCommonClasses = 'h-4 w-4 bg-indigo-600 rounded-full';

  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="flex justify-center items-center text-center">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
        <div className={`${circleCommonClasses} animate-bounce400`} />
      </div>
    </div>
  );
};

