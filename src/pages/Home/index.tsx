import React, { useReducer } from 'react';
import { CheckIcon } from '../../assets/icons/CheckIcon';
import { Feedback } from '../../components/Feedback';
import { reducer } from './methods';
import { StateProps } from './props';

const initialState: StateProps = {
  icon: CheckIcon,
  color: '',
  message: ''
};

export const Home: React.FC = () => {
  const [feedbackState, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-screen h-screen w-350">
        <hr />
        <Feedback {...feedbackState} />
        <button 
          className="h-10 w-full px-6 mt-5 flex justify-center items-center font-semibold rounded-md border-2 border-black bg-black hover:bg-white hover:text-black transition-all ease-in text-white"
          onClick={() => dispatch({ mode: 'error' })}
        >
          Click to throw an error
        </button>
        <button 
          className="h-10 w-full px-6 mt-5 flex justify-center items-center font-semibold rounded-md border-2 border-black bg-black hover:bg-white hover:text-black transition-all ease-in text-white"
          onClick={() => dispatch({ mode: 'success' })}
        >
          Click to get a success message 
        </button>
        <button 
          className="h-10 w-full px-6 mt-5 flex justify-center items-center font-semibold rounded-md border-2 border-black bg-black hover:bg-white hover:text-black transition-all ease-in text-white"
          onClick={() => dispatch({ mode: 'warning' })}
        >
          Click to get a warning message
        </button>
        <button 
          className="h-10 w-full px-6 mt-5 flex justify-center items-center font-semibold rounded-md border-2 border-black bg-black hover:bg-white hover:text-black transition-all ease-in text-white"
          onClick={() => dispatch({ mode: 'hidden' })}
        >
          Click to hide feedback component
        </button>
      </div>
    </main>
  );
};
