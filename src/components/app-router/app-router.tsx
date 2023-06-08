import { Routes, Route } from 'react-router-dom';
import { AppRouterProps } from './app-router-types';

const AppRouter: React.FC<AppRouterProps> = ({
  routerPrivate,
  routerPublick,
  auth,
}) => {
  if (auth) {
    return (
      <Routes>
        {routerPrivate.map((router) => (
          <Route
            key={router.path}
            path={router.path}
            element={<router.element />}
          />
        ))}
      </Routes>
    );
  }
  if (!auth) {
    return (
      <Routes>
        {routerPublick.map((router) => (
          <Route
            key={router.path}
            path={router.path}
            element={<router.element />}
          />
        ))}
      </Routes>
    );
  }
  return null;
};
export default AppRouter;
