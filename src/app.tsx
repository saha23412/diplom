import { useContext } from 'react';
import AppRouter from './components/app-router/app-router';
import { privateRoutes, publicRoutes } from './router/router';
import { AuthContext } from './contexts/auth-context/autn-context';

const App: React.FC = () => {
  const { getInitialStateAuth } = useContext(AuthContext);
  return (
    <AppRouter
      routerPublick={publicRoutes}
      routerPrivate={privateRoutes}
      auth={getInitialStateAuth()}
    />
  );
};
export default App;
