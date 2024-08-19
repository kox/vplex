import { createBrowserRouter } from 'react-router-dom';
import { Login } from '@repo/ui/components/pages/login'
import { Dashboard } from '@repo/ui/components/pages/dashboard'
import { ProtectedRoute } from '@repo/ui/components/ui/protected-route';

const routes = createBrowserRouter([
  /* {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute element={ <Dashboard /> } />,
  }, */
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

export default routes;
