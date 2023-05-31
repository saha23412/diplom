import { ButtonType } from '../../global-types/button-types';
import RouteNames from '../../global-types/routes-name';

interface FormInput {
  name: string;
  label: string;
}
export interface FormProps {
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
