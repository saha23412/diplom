import { Navigate } from 'react-router-dom';
import { PrivateAuthpProps } from './private-auth-types';
import RouteNames from '../../global-types/routes-name';

const PrivateAuth: React.FC<PrivateAuthpProps> = ({ children, auth }) => {
  if (!auth) {
    return <Navigate to={RouteNames.LOGIN} />;
  }
  return children;
};

export default PrivateAuth;
