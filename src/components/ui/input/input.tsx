import { InputProps } from './input-types';
import style from './input.module.css';

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input className={style.input} id={name} name={name} {...rest} />
    </>
  );
};

export default Input;
