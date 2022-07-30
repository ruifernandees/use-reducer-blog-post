import { IconProps } from "../../assets/icons/IconProps";

export type stateMode = 'success' | 'warning' | 'error' | 'hidden';

export interface ActionProps {
  mode: stateMode;
}

export interface StateProps {
  icon: React.FC<IconProps>;
  color: string;
  message: string;
}