import { motion } from 'framer-motion';
import ContainerBorder from '../../containers/container-border/container-border';
import { StorageProps } from './storage-types';
import style from './storage.module.css';
import StorageCard from './storage-card/storage-card';

const Storage: React.FC<StorageProps> = ({ storage }) => {
  return (
    <motion.div className={style.storage}>
      <ContainerBorder className={style['storage-inventory']}>
        <ul className={style.inventory}>
          {storage.map((inventory) => (
            <StorageCard
              id={inventory.id}
              key={inventory.id}
              title={inventory.title}
              description={inventory.description}
              amount={inventory.amount}
              inventory_number={inventory.inventory_number}
              user_id={inventory.user_id}
              metro={inventory.metro}
            />
          ))}
        </ul>
      </ContainerBorder>
    </motion.div>
  );
};

export default Storage;
