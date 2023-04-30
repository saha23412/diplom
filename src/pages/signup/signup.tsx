import { useState } from 'react';
import Form from './../../components/form/form';
import { formTitleSignup, inputsSignup, pathTitleSignup } from '../../constants/constants';
import { RouteNames } from '../../router/router';

const Signup: React.FC = () => {
  const [data, setData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
  });
  //Записываем данные input в объект data
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  //Делаем submit формы
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);
    setData({ name: '', last_name: '', email: '', password: '' });
  };
  return (
    <Form
      handleSubmit={handleSubmit}
      onChange={handleChange}
      data={data}
      typeButton="submit"
      titleButton="Войти"
      formTitle={formTitleSignup}
      formInput={inputsSignup}
      linkPath={RouteNames.LOGIN}
      linkTitle={pathTitleSignup}
    />
  );
};

export default Signup;
