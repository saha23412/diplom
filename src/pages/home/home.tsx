import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationItem, greeting } from '../../constants/constants';
import { resetCurrentUser } from '../../store/slice/user/user-slice';
import { AuthContext } from '../../contexts/auth-context/autn-context';
import { useAppDispatch } from '../../store/hook-store';
import RouteNames from '../../global-types/routes-name';
import AnimationBackground from '../../components/animation/animation-background/animation-background';
import BlockLogo from '../../components/block-logo/block-logo';
import logo from '../../assets/logo2.jpg';
import Navbar from '../../components/navbar/navbar';
import getCookie from '../../utils/cookie/get-cookie';
import deleteCookie from '../../utils/cookie/delete-cookie';
import ContainerCenter from '../../containers/container-center/container-center';
import style from './home.module.css';
import Button from '../../components/ui/button/button';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { updateStorageAuth } = useContext(AuthContext);
  const exitClick = () => {
    deleteCookie('id');
    updateStorageAuth(false);
    dispatch(resetCurrentUser());
    navigate(RouteNames.HOME);
  };
  return (
    <ContainerCenter>
      <div className={style['home-wrapper']}>
        <BlockLogo imagesSrc={logo} title={greeting} />
        {getCookie('id') ? (
          <Navbar
            className={style['home-wrapper-navbar']}
            navigationItem={[
              { title: 'Профиль', path: `profile/${getCookie('id')}` },
              ...NavigationItem,
            ]}
          />
        ) : (
          <div className={style['button-wrapper']}>
            <Button type="button" className={style.button} onClick={exitClick}>
              Войти
            </Button>
          </div>
        )}
      </div>
      <AnimationBackground />
    </ContainerCenter>
  );
};

export default Home;
