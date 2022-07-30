import colors from 'tailwindcss/colors';
import { AlertIcon } from '../../assets/icons/AlertIcon';
import { CheckIcon } from '../../assets/icons/CheckIcon';
import { XIcon } from '../../assets/icons/XIcon';
import { ActionProps, StateProps } from "./props";

type modesType = {[key: string]: StateProps};

const modes: modesType = {
  error: {
    icon: XIcon,
    color: colors.red[500],
    message: 'Unexpected error!'
  },
  success: {
    icon: CheckIcon,
    color: colors.green[500],
    message: 'Success!'
  },
  warning: {
    icon: AlertIcon,
    color: colors.yellow[500],
    message: 'This is a warning'
  },
  hidden: {
    icon: CheckIcon,
    color: '',
    message: ''
  }
}

export function reducer(state: StateProps, action: ActionProps): StateProps {
  if (!(action.mode in modes)) {
    throw new Error();
  }
  return modes[action.mode];
}
