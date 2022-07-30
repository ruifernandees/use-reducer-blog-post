import React from 'react';
import { IconProps } from './IconProps';

export const CheckIcon: React.FC<IconProps> = (props) => {
  const { size, onClick, color, className } = props;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      onClick={onClick}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};
