import { NotificationStatus } from '../../constants/constants';

export interface NotificationCardProps {
  textNotification: string;
  statusNotification: NotificationStatus;
  isOpen: boolean;
  onClickCLose: (isOpen: boolean) => void;
}
