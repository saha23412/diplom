import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NotificationStatus,
  formTitleLogin,
  inputsLogin,
  notificationLogin,
  pathTitleLogin,
} from '../../constants/constants';
import ContainerCenter from '../../containers/container-center/container-center';
import { validationCheck } from '../../utils/validation';
import { LoginRulesForm } from '../../validation/rules';
import checkLogin from '../../utils/check-login';
import { getUsers } from '../../store/slice/user/user-slice';
import { useAppDispatch } from '../../hooks/hook-store';
import Form from '../../components/form/form';
import Notification from '../../components/notification/notification-card';
import RouteNames from '../../global-types/routes-name';
import { AuthContext } from '../../contexts/auth-context/autn-context';
import setCookie from '../../utils/cookie/set-cookie';

const Login: React.FC = () => {
  const { updateStorageAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [NotificationOpenNegative, setNotificationOpenNegative] =
    useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validationCheck(user, LoginRulesForm)) {
      setNotificationOpenNegative(false);
      const response = await dispatch(getUsers());
      const resultCheck = Array.isArray(response.payload)
        ? !!checkLogin(user, response.payload)
        : null;
      if (resultCheck && Array.isArray(response.payload)) {
        const userCheck = checkLogin(user, response.payload);
        if (userCheck?.user_id) {
          setCookie('id', userCheck.user_id, {
            path: '/',
          });
        }
        updateStorageAuth(true);
        setNotificationOpenNegative(false);
        navigate(RouteNames.HOME);
      } else {
        setNotificationOpenNegative(true);
      }
    } else {
      setNotificationOpenNegative(true);
    }
    setUser({ email: '', password: '' });
  };

  return (
    <ContainerCenter>
      <Notification
        statusNotification={NotificationStatus.NEGATIVE}
        textNotification={notificationLogin}
        isOpen={NotificationOpenNegative}
        onClickCLose={setNotificationOpenNegative}
      />
      <Form
        handleSubmit={handleSubmit}
        onChange={handleChange}
        data={user}
        typeButton="submit"
        titleButton="Войти"
        formTitle={formTitleLogin}
        formInput={inputsLogin}
        linkPath={RouteNames.SIGNUP}
        linkTitle={pathTitleLogin}
      />
    </ContainerCenter>
  );
};

export default Login;
