import ContainerBorder from '../../containers/container-border/container-border';
import ProfileIcon from '../../icons/profile';
import { ProfileInfoProps } from './profile-info-types';
import LinkCustom from '../ui/link/link';
import RouteNames from '../../global-types/routes-name';
import Button from '../ui/button/button';
import style from './profile-info.module.css';

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  last_name,
  email,
  exitClick,
}) => {
  return (
    <div className={style['profile-info']}>
      <div className={style['profile-link']}>
        <ContainerBorder className={style.link}>
          <LinkCustom path={RouteNames.HOME} className={style['link-home']}>
            Вернуться на главную
          </LinkCustom>
        </ContainerBorder>
      </div>
      <div className={style['profile-wrapper']}>
        <ContainerBorder className={style.profile}>
          <div className={style['profile-img']}>
            <ProfileIcon />
          </div>
          <div className={style['profiel-text-info']}>
            <div className={style['profile-name']}>
              <span>Имя:</span> {name}
            </div>
            <div className={style['profile-lat_name']}>
              <span>Фамилия:</span> {last_name}
            </div>
            <div className={style['profile-email']}>
              <span>Логин:</span> {email}
            </div>
          </div>
        </ContainerBorder>
      </div>
      <div className={style['button-wrapper']}>
        <Button type="button" className={style.button} onClick={exitClick}>
          Выйти из аккаунта
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
