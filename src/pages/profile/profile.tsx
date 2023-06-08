import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getUserById,
  resetCurrentUser,
} from '../../store/slice/user/user-slice';
import { useAppDispatch, useAppSelector } from '../../store/hook-store';
import ProfileInfo from '../../components/profile-info/profile-info';
import ContainerWidth from '../../containers/container-width/container-width';
import MyLoader from '../../components/loader/loader';
import deleteCookie from '../../utils/cookie/delete-cookie';
import { AuthContext } from '../../contexts/auth-context/autn-context';
import RouteNames from '../../global-types/routes-name';

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { updateStorageAuth } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const selectRedux = useAppSelector((state) => ({
    users: state.user.currentUser,
    loading: state.user.loading,
  }));
  const exitClick = () => {
    deleteCookie('id');
    updateStorageAuth(false);
    dispatch(resetCurrentUser());
    navigate(RouteNames.HOME);
  };
  useEffect(() => {
    if (id && !selectRedux.users) dispatch(getUserById(id));
  }, [dispatch, id, selectRedux.users]);

  if (!selectRedux.users && selectRedux.loading) {
    return <MyLoader />;
  }
  if (selectRedux.users) {
    return (
      <ContainerWidth>
        <ProfileInfo
          name={selectRedux.users.name}
          last_name={selectRedux.users.last_name}
          email={selectRedux.users.email}
          exitClick={exitClick}
        />
      </ContainerWidth>
    );
  }
  return null;
};

export default Profile;
