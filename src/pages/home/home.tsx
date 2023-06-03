import { NavigationItem, greeting } from '../../constants/constants';
import AnimationBackground from '../../components/animation/animation-background/animation-background';
import BlockLogo from '../../components/block-logo/block-logo';
import logo from '../../assets/logo2.jpg';
import Navbar from '../../components/navbar/navbar';
import getCookie from '../../utils/cookie/get-cookie';
import ContainerCenter from '../../containers/container-center/container-center';
import style from './home.module.css';

const Home = () => {
  return (
    <ContainerCenter>
      <div className={style['home-wrapper']}>
        {getCookie('id') ? (
          <Navbar
            className={style['home-wrapper-navbar']}
            navigationItem={[
              { title: 'Профиль', path: `profile/${getCookie('id')}` },
              ...NavigationItem,
            ]}
          />
        ) : null}

        <BlockLogo imagesSrc={logo} title={greeting} />
      </div>
      <AnimationBackground />
    </ContainerCenter>
  );
};

export default Home;
