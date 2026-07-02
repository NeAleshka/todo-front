import { useState } from 'react';

interface TaskFormProps {
  onAdd: (title: string) => void;
}

const TaskForm = ({ onAdd }: TaskFormProps) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = () => {
    if (!newTask.trim()) return;
    onAdd(newTask);
    setNewTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Введите задачу..."
        style={{
          padding: '8px',
          width: '300px',
          marginRight: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Добавить
      </button>
    </div>
  );
};

export default TaskForm;
