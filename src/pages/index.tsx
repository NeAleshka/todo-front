import { createFileRoute, useNavigate } from '@tanstack/react-router';

const RouteComponent = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    void navigate({ to: '/login' }).then();
  };

  return (
    <div>
      <button type={'button'} onClick={navigateToLogin}>
        Залогиниться
      </button>
      <h1>Super Todos</h1>
    </div>
  );
};
export const Route = createFileRoute('/')({
  component: RouteComponent,
});
