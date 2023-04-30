import { ButtonType } from '../../../global-types/button-types';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type: ButtonType;
  disabled?: boolean;
};
