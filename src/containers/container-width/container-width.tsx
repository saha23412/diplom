import style from './container-width.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerWidth: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${style.container} ${className}`}>{children}</div>;
};

export default ContainerWidth;
