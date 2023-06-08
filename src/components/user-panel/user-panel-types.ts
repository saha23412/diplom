import { ButtonType } from '../../global-types/button-types';
import { FormInput } from '../../global-types/form-inputs-types';

export interface UserPanelProps {
  formInput: FormInput[];
  formTitle?: string;
  titleButton: string;
  data: {
    [key: string]: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  typeButton: ButtonType;
}
