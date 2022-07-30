import React from 'react';
import { ActionButtonProps } from './props';

export const ActionButton: React.FC<ActionButtonProps> = ({ content, onClick }) => {
  return (
    <button 
      className="h-10 w-full px-6 mt-5 flex justify-center items-center font-semibold rounded-md border-2 border-black bg-black hover:bg-white hover:text-black transition-all ease-in text-white"
      onClick={onClick}
    >
      {content}
    </button> 
  );
};
