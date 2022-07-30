import React from 'react';
import { IconProps } from './IconProps';

export const XIcon: React.FC<IconProps> = (props) => {
  const { size, onClick, color, className } = props;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      onClick={onClick}
    >
      <circle cx="12"
        cy="12"
        r="10"
      ></circle>
      <line x1="15"
        y1="9"
        x2="9"
        y2="15"
      ></line>
      <line x1="9"
        y1="9"
        x2="15"
        y2="15"
      ></line>
    </svg>
  );
};
