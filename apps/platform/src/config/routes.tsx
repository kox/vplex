import { createBrowserRouter } from 'react-router-dom';
import { Login } from '@repo/ui/components/pages/login'
import { Dashboard } from '@repo/ui/components/pages/dashboard'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

export default routes;
