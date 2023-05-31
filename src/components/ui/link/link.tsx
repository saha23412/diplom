import { Link } from 'react-router-dom';
import { LinkCustomProps } from './link-types';
import style from './link.module.css';

const LinkCustom: React.FC<LinkCustomProps> = ({
  path,
  children,
  className,
}) => {
  return (
    <Link to={path} className={`${style.link} ${className}`}>
      {children}
    </Link>
  );
};

export default LinkCustom;
