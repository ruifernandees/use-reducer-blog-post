import { AlertIcon } from '../../assets/icons/AlertIcon';
import { CheckIcon } from '../../assets/icons/CheckIcon';
import { XIcon } from '../../assets/icons/XIcon';
import colors from 'tailwindcss/colors';
import { ActionProps, StateProps } from "./props";

export function reducer(state: StateProps, action: ActionProps): StateProps {
  switch (action.mode) {
    case 'error':
      return {
        icon: XIcon,
        color: colors.red[500],
        message: 'Unexpected error!'
      }
    case 'success':
      return {
        icon: CheckIcon,
        color: colors.green[500],
        message: 'Success!'
      }
    case 'warning':
      return {
        icon: AlertIcon,
        color: colors.yellow[500],
        message: 'This is a warning'
      }
    case 'hidden':
      return {
        icon: CheckIcon,
        color: '',
        message: ''
      }
    default:
      throw new Error();
  }
}
