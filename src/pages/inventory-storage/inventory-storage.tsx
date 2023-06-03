import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook-store';
import { getStorage } from '../../store/slice/user/storage-slice';
import MyLoader from '../../components/loader/loader';
import Storage from '../../components/storage/storage';

const InventoryStorage: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectRedux = useAppSelector((state) => ({
    storage: state.storage.storage,
    loading: state.storage.loading,
  }));
  useEffect(() => {
    dispatch(getStorage());
  }, [dispatch]);
  if (!selectRedux.storage && selectRedux.loading) {
    return <MyLoader />;
  }
  if (selectRedux.storage) {
    return <Storage storage={selectRedux.storage} />;
  }
  return <div>Пользователя нет</div>;
};

export default InventoryStorage;
