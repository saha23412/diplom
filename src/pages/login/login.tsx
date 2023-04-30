import { useState } from 'react';
import { RouteNames } from '../../router/router';
import {
  formTitleLogin,
  inputsLogin,
  pathTitleLogin,
} from '../../constants/constants';
import Form from '../../components/form/form';
import { useForm } from 'react-hook-form';

const Login: React.FC = () => {
  const { handleSubmit } = useForm();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  //Записываем данные input в объект data
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const onSubmit = handleSubmit((data) => console.log(data));

  //Делаем submit формы
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(data);
  //   setData({ email: '', password: '' });
  // };
  return (
    <Form
      onSubmit={onSubmit}
      onChange={handleChange}
      data={data}
      typeButton="submit"
      titleButton="Войти"
      formTitle={formTitleLogin}
      formInput={inputsLogin}
      linkPath={RouteNames.SIGNUP}
      linkTitle={pathTitleLogin}
    />
  );
};

export default Login;
