import logo from '../../assets/logo2.jpg';
import AnimationBackground from '../../components/animation/animation-background/animation-background';
import BlockLogo from '../../components/block-logo/block-logo';
import LinkCustom from '../../components/ui/link/link';
import { greeting } from '../../constants/constants';
import ContainerCenter from '../../containers/container-center/container-center';
import { RouteNames } from '../../router/router';
import style from './main.module.css';

const Main: React.FC = () => {
  return (
    <ContainerCenter>
      <div className={style['main-wrapper']}>
        <BlockLogo imagesSrc={logo} title={greeting} />

        <div className={style['main-navigation']}>
          <p>
            <span>У вас уже есть личный кабинет ?</span>
            <LinkCustom path={RouteNames.LOGIN}>Войдите</LinkCustom>{' '}
          </p>
          <p>
            <span>У вас еще нет личного кабинета ?</span>
            <LinkCustom path={RouteNames.SIGNUP}>
              Создать личный кабинет
            </LinkCustom>
          </p>
        </div>
      </div>
      <AnimationBackground />
    </ContainerCenter>
  );
};

export default Main;
