export interface NotificationCardProps {
  textNotification: string;
  isOpen: boolean;
  onClickCLose: (isOpen: boolean) => void;
}
