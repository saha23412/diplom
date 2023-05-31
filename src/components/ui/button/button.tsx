import { ButtonProps } from './button-types';
import style from './button.module.css';

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  children,
  disabled,
}) => {
  return (
    <button
      className={style.button}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
