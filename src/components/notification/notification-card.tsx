import { motion } from 'framer-motion';
import { NotificationCardProps } from './notification-card-types';
import Button from '../ui/button/button';
import style from './notification-card.module.css';

const Notification: React.FC<NotificationCardProps> = ({
  textNotification,
  isOpen,
  onClickCLose,
}) => {
  if (isOpen) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className={`${style['notification-status-negative']} ${style.notification}`}
      >
        <p>{textNotification}</p>
        <Button type="button" onClick={() => onClickCLose(false)}>
          Закрыть
        </Button>
      </motion.div>
    );
  }
  return null;
};

export default Notification;
