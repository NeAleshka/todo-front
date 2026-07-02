import { useState, useEffect } from 'react';
import { type Task, taskService } from './services/taskService';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Загружаем задачи при монтировании компонента
  useEffect(() => {
    loadTasks().then();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await taskService.getAll();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Не удалось загрузить задачи. Проверьте, запущен ли бэкенд.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title: string) => {
    try {
      const newTask = await taskService.create(title);
      setTasks([...tasks, newTask]);
      setError(null);
    } catch (err) {
      setError('Не удалось создать задачу');
      console.error(err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskService.delete(id);
      setTasks(tasks.filter((task) => task.id !== id));
      setError(null);
    } catch (err) {
      setError('Не удалось удалить задачу');
      console.error(err);
    }
  };
  const handleGoogleLogin = () => {
    // Просто редирект на бэкенд, который перенаправит на Google
    window.location.href = 'http://localhost:3000/auth/google';
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Загрузка задач...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>📝 Список задач</h1>
      {error && (
        <div
          style={{
            color: 'red',
            marginBottom: '10px',
            border: '1px solid red',
            padding: '8px',
          }}
        >
          {error}
        </div>
      )}
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          backgroundColor: '#4285F4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        Войти через Google
      </button>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
      <p style={{ marginTop: '10px', color: '#666' }}>
        Всего задач: {tasks.length}
      </p>
    </div>
  );
};

export default App;
