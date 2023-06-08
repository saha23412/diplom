import { useState } from 'react';
import ContainerBorder from '../../containers/container-border/container-border';
import ComplexAnimatedModal from '../modal/modal';
import Button from '../ui/button/button';
import Form from '../form/form';
import { UserPanelProps } from './user-panel-types';
import style from './user-panel.module.css';

const UserPanel: React.FC<UserPanelProps> = ({
  data,
  formInput,
  onChange,
  handleSubmit,
  typeButton,
  titleButton,
}) => {
  const [opened, setOpened] = useState(false);
  return (
    <ContainerBorder className={style['user-panel']}>
      <Button
        type="button"
        className={style.button}
        onClick={() => setOpened(true)}
      >
        Добавить инвентарь
      </Button>
      <ComplexAnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <div className={style['add-inventory']}>
          <div className={style['close-form']}>
            <h2>Заполните форму</h2>
            <Button
              className={style['form-button']}
              type="button"
              onClick={() => setOpened(false)}
            >
              Закрыть форму
            </Button>
          </div>
          <Form
            className={style['add-inventory-form']}
            data={data}
            formInput={formInput}
            onChange={onChange}
            handleSubmit={handleSubmit}
            typeButton={typeButton}
            titleButton={titleButton}
          />
        </div>
      </ComplexAnimatedModal>
    </ContainerBorder>
  );
};

export default UserPanel;
