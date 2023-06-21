import { SelectProps } from './select-type';
import style from './select.module.css';

const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select
      className={style.select}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(event)
      }
    >
      <option value="" disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
