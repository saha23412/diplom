import style from './container-center.module.css';

interface ContainerCenterProps {
  children: React.ReactNode;
}
const ContainerCenter: React.FC<ContainerCenterProps> = ({ children }) => {
  return <div className={style['container-center']}>{children}</div>;
};

export default ContainerCenter;
