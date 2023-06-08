import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Form from '../../components/form/form';
import Notification from '../../components/notification/notification-card';
import ContainerCenter from '../../containers/container-center/container-center';
import { SignupRulesForm } from '../../validation/rules';
import { createUser, getUsers } from '../../store/slice/user/user-slice';
import { useAppDispatch } from '../../store/hook-store';
import {
  NotificationStatus,
  formTitleSignup,
  inputsSignup,
  notificationSignup,
  pathTitleSignup,
} from '../../constants/constants';

import { checkUser } from '../../utils/check-user';

import { validationCheck } from '../../utils/validation';
import RouteNames from '../../global-types/routes-name';

const Signup: React.FC = () => {
  const naviagate = useNavigate();
  const dispatch = useAppDispatch();
  // Уведомления
  const [NotificationOpenCheckUser, setNotificationOpenCheckUser] =
    useState(false);
  const [NotificationOpenValidation, setNotificationOpenValidation] =
    useState(false);

  // Данные для регистрации
  const [data, setData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
  });
  // Записываем данные input в объект data
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  // submit формы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validationCheck(data, SignupRulesForm)) {
      setNotificationOpenValidation(false);
      const response = await dispatch(getUsers());
      const resultCheck = Array.isArray(response.payload)
        ? checkUser(data, response.payload)
        : null;
      if (!resultCheck) {
        const userId = crypto.randomUUID();
        dispatch(
          createUser({ ...data, responsibility_storage: [], user_id: userId })
        );
        setNotificationOpenCheckUser(false);
        setNotificationOpenValidation(false);
        naviagate(RouteNames.LOGIN);
      } else {
        setNotificationOpenValidation(false);
        setNotificationOpenCheckUser(true);
      }
    } else {
      setNotificationOpenCheckUser(false);
      setNotificationOpenValidation(true);
    }

    setData({ name: '', last_name: '', email: '', password: '' });
  };
  return (
    <ContainerCenter>
      <Notification
        statusNotification={NotificationStatus.NEGATIVE}
        textNotification={notificationSignup}
        isOpen={NotificationOpenValidation}
        onClickCLose={setNotificationOpenValidation}
      />
      <Notification
        statusNotification={NotificationStatus.NEGATIVE}
        textNotification="Пользователь уже существует"
        isOpen={NotificationOpenCheckUser}
        onClickCLose={setNotificationOpenCheckUser}
      />

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
    </ContainerCenter>
  );
};

export default Signup;
