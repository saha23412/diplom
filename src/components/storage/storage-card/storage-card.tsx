import { motion } from 'framer-motion';
import { StorageCardProps } from './storage-card-types';
import Button from '../../ui/button/button';
import { useAppDispatch } from '../../../store/hook-store';
import { deleteMyInventory } from '../../../store/slice/storage/storage-slice';
import style from './storage-card.module.css';
import getCookie from '../../../utils/cookie/get-cookie';

const StorageCard: React.FC<StorageCardProps> = ({
  title,
  amount,
  description,
  inventory_number,
  id,
  user_id,
}) => {
  const dispatch = useAppDispatch();
  const idCookie = getCookie('id');

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      whileHover={{ scale: 1.05, opacity: 0.8 }}
    >
      {idCookie === user_id ? (
        <p className={style['title-card']}>Доступно для изменений</p>
      ) : (
        <p className={style['title-card']}>Только для просмотра</p>
      )}
      <div
        className={`${style['storage-card']} ${
          idCookie === user_id ? style['card-border'] : undefined
        }`}
      >
        <div>
          <p>
            <span>Название:</span> {title}
          </p>
        </div>
        <div>
          <p>
            <span>Количество:</span> {amount}
          </p>
        </div>
        <div>
          <p>
            <span>Описание:</span> {description}
          </p>
        </div>
        <div>
          <p>
            <span>Номер:</span> {inventory_number}
          </p>
        </div>
        {idCookie === user_id ? (
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteMyInventory(id));
            }}
          >
            Удалить
          </Button>
        ) : null}
      </div>
    </motion.li>
  );
};

export default StorageCard;
