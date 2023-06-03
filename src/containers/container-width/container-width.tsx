import style from './container-width.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerWidth: React.FC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default ContainerWidth;
