import React from 'react';
import { MainContainerProps } from './props';

export const MainContainer: React.FC<MainContainerProps> = ({children}) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {children}
    </div>
  );
};
