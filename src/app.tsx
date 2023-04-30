import AppRouter from './components/app-router/app-router';
import { publicRoutes } from './router/router';

const App: React.FC = () => {
  return <AppRouter router={publicRoutes} />;
};

export default App;
