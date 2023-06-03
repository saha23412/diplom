import ContainerBorder from '../../containers/container-border/container-border';
import { BlockLogoProps } from './block-logo-types';
import style from './block-logo.module.css';

const BlockLogo: React.FC<BlockLogoProps> = ({ imagesSrc, title }) => {
  return (
    <ContainerBorder>
      <div className={style['main-title-wrapper']}>
        <img src={imagesSrc} alt="logo" />
        <p className={style['main-title']}>{title}</p>
      </div>
    </ContainerBorder>
  );
};

export default BlockLogo;
