import { FormProps } from './form-types';
import Input from '../ui/input/input';
import style from './form.module.css';
import Button from '../ui/button/button';
import LinkCustom from '../ui/link/link';
import ContainerBorder from '../../containers/container-border/container-border';

const Form: React.FC<FormProps> = ({
  formTitle,
  formInput,
  onChange,
  data,
  handleSubmit,
  typeButton,
  onClickButton,
  titleButton,
  linkPath,
  linkTitle,
}) => {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <p className={style['form-title']}>{formTitle}</p>
      <div className={style['form-inputs']}>
        {formInput.map((input) => (
          <Input
            key={input.name}
            onChange={onChange}
            name={input.name}
            label={input.label}
            value={data[input.name]}
          />
        ))}
      </div>

      {linkPath ? <LinkCustom path={linkPath}>{linkTitle}</LinkCustom> : null}
      <Button type={typeButton} onClick={onClickButton}>
        {titleButton}
      </Button>
    </form>
  );
};

export default Form;
