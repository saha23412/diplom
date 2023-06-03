import style from './container-border.module.css';

interface ContainerBorderProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerBorder: React.FC<ContainerBorderProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${style['container-border']} ${className}`}>
      {children}
    </div>
  );
};

export default ContainerBorder;
