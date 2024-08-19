import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@repo/store/auth';

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export { ProtectedRoute };
