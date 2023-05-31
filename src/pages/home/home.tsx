import { NavigationItem, greeting } from '../../constants/constants';
import AnimationBackground from '../../components/animation/animation-background/animation-background';
import BlockLogo from '../../components/block-logo/block-logo';
import ContainerCenter from '../../containers/container-center/container-center';
import logo from '../../assets/logo2.jpg';
import style from './home.module.css';
import Navbar from '../../components/navbar/navbar';
import getCookie from '../../utils/cookie/get-cookie';

const Home = () => {
  document.cookie = 'id=123';
  console.log(getCookie('id'));
  return (
    <ContainerCenter>
      <div className={style['home-wrapper']}>
        <BlockLogo imagesSrc={logo} title={greeting} />
        <Navbar
          className={style['home-wrapper-navbar']}
          navigationItem={NavigationItem}
        />
      </div>
      <AnimationBackground />
    </ContainerCenter>
  );
};

export default Home;
