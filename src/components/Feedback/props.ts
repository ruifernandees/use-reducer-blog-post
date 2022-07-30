import { IconProps } from "../../assets/icons/IconProps";

export interface FeedbackProps {
  icon: React.FC<IconProps>;
  color: string;
  message: string;
}