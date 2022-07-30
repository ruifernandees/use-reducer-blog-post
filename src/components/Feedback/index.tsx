import React from 'react';
import { IconProps } from '../../assets/icons/IconProps';

interface FeedbackProps {
  icon: React.FC<IconProps>;
  color: string;
  message: string;
}

export const Feedback: React.FC<FeedbackProps> = ({ icon, color, message }) => {
  const CurrentIcon = icon;

  return (
    <div 
      className={`flex mb-2 items-center h-10 px-6 w-300 font-semibold rounded-md transition-all ease-in text-white`}
      style={{
        backgroundColor: color
      }}
    >
      <CurrentIcon size={28} />
      <p className="ml-2">
        {message}
      </p>
    </div>
  );
};
