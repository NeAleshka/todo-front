import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/tasks')({
  component: TasksPage,
});

function TasksPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Список задач</h1>
      <p>Тут будут задачи после авторизации</p>
    </div>
  );
}
