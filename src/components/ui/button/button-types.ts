export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  type: JSX.IntrinsicElements['button']['type'];
  disabled?: boolean;
  className?: string;
}
