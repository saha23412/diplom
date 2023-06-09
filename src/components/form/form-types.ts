import { ButtonType } from '../../global-types/button-types';
import { FormInput } from '../../global-types/form-inputs-types';
import RouteNames from '../../global-types/routes-name';

export interface FormProps {
  className?: string;
  formTitle?: string;
  formInput: FormInput[];
  data: {
    [key: string]: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  typeButton: ButtonType;
  onClickButton?: () => void;
  titleButton: React.ReactNode;
  linkPath?: RouteNames;
  linkTitle?: string;
}
