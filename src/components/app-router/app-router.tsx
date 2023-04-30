import { Routes, Route } from 'react-router-dom';
import { AppRouterEntity } from './app-router-types';

const AppRouter: React.FC<AppRouterEntity> = ({ router }) => {
  return (
    <Routes>
      {router.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};
export default AppRouter;
