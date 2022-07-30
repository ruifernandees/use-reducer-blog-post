import React, { useReducer } from 'react';
import { CheckIcon } from '../../assets/icons/CheckIcon';
import { ActionButton } from '../../components/ActionButton';
import { MainContainer } from '../../components/MainContainer';
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
    <MainContainer>
      <div className="flex flex-col items-center justify-center w-screen h-screen w-350">
        <hr />
        <Feedback {...feedbackState} />
        <ActionButton
          onClick={() => dispatch({ mode: 'error' })}
          content="Click to throw an error"
        />
        <ActionButton
          onClick={() => dispatch({ mode: 'success' })}
          content="Click to get a success message "
        />
        <ActionButton
          onClick={() => dispatch({ mode: 'warning' })}
          content="Click to get a warning message"
        />
        <ActionButton
          onClick={() => dispatch({ mode: 'hidden' })}
          content="Click to hide feedback component"
        />
      </div>
    </MainContainer>
  );
};
