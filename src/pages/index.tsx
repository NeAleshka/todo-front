import {
  createFileRoute,
  useNavigate,
  useRouteContext,
} from '@tanstack/react-router';
import { checkAuth } from '../services/authService.ts';
import { router } from '../router.ts';

const RouteComponent = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    void navigate({ to: '/login' }).then();
  };
  const { isAuthenticated } = useRouteContext({ from: '/' });

  return (
    <div>
      {!isAuthenticated && (
        <button type={'button'} onClick={navigateToLogin}>
          Залогиниться
        </button>
      )}
      <h1>Super Todos</h1>
    </div>
  );
};
export const Route = createFileRoute('/')({
  component: RouteComponent,
  beforeLoad: async () => {
    const { isAuthenticated } = await checkAuth();
    router.update({
      context: {
        isAuthenticated,
      },
    });
  },
});
