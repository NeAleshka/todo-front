import type { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
}

const TaskList = ({ tasks, onDelete }: TaskListProps) => {
  if (tasks.length === 0) {
    return <p style={{ color: '#666' }}>Задач пока нет. Добавьте первую!</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
