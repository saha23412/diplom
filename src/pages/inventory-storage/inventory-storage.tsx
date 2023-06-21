import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook-store';
import {
  createInventory,
  getStorage,
} from '../../store/slice/storage/storage-slice';
import MyLoader from '../../components/loader/loader';
import Storage from '../../components/storage/storage';
import SortPanel from '../../components/sort-panel/sort-panel';
import ContainerWidth from '../../containers/container-width/container-width';
import getCookie from '../../utils/cookie/get-cookie';
import UserPanel from '../../components/user-panel/user-panel';
import style from './inventory-storage.module.css';
import ContainerBorder from '../../containers/container-border/container-border';
import LinkCustom from '../../components/ui/link/link';
import RouteNames from '../../global-types/routes-name';
import { inputsFormUserPanel } from '../../constants/constants';
import validationCheck from '../../utils/validation';
import { UserPanelRulesForm } from '../../validation/rules';

const InventoryStorage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [NotificationCheckInventory, setNotificationCheckInventory] =
    useState(false);
  const [inventory, setInventory] = useState({
    title: '',
    amount: '1',
    description: '',
    inventory_number: '',
    metro: '',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInventory({ ...inventory, [name]: value });
  };
  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setInventory({ ...inventory, metro: value });
  };
  const selectRedux = useAppSelector((state) => ({
    storage: state.storage.storage,
    loading: state.storage.loading,
    error: state.storage.error,
  }));
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userId = getCookie('id');
    console.log(validationCheck(inventory, UserPanelRulesForm));
    if (userId && validationCheck(inventory, UserPanelRulesForm)) {
      console.log('1');
      setNotificationCheckInventory(false);
      await dispatch(
        createInventory({
          ...inventory,
          user_id: userId,
        })
      );
    } else {
      setNotificationCheckInventory(true);
    }
    setInventory({
      title: '',
      amount: '1',
      description: '',
      inventory_number: '',
      metro: '',
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!selectRedux.storage) {
        await dispatch(getStorage());
      }
    };
    fetchData();
  }, [dispatch, selectRedux.storage]);

  if (!selectRedux.storage && selectRedux.loading) {
    return <MyLoader />;
  }
  if (selectRedux.storage && !selectRedux.loading) {
    return (
      <div className={style['inventory-storage']}>
        <ContainerWidth>
          <div className={style['inventory-functional']}>
            <ContainerBorder className={style.link}>
              <LinkCustom path={RouteNames.HOME} className={style['link-home']}>
                Вернуться на главную
              </LinkCustom>
            </ContainerBorder>

            <UserPanel
              isOpen={NotificationCheckInventory}
              onClickCLose={() => setNotificationCheckInventory(false)}
              onChangeSelect={handleChangeSelect}
              typeButton="submit"
              titleButton="Добавить"
              handleSubmit={handleSubmit}
              onChange={handleChange}
              formInput={inputsFormUserPanel}
              data={inventory}
            />
          </div>
          <div className={style['inventory-grid']}>
            {/* <SortPanel /> */}
            <Storage storage={selectRedux.storage} />
          </div>
        </ContainerWidth>
      </div>
    );
  }
  if (!selectRedux.storage && !selectRedux.loading && selectRedux.error) {
    return <div>Нет</div>;
  }
  return null;
};

export default InventoryStorage;
