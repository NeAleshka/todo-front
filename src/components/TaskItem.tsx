import type {Task} from '../types';

interface TaskItemProps {
    task: Task;
    onDelete: (id: string) => void;
}

const TaskItem = ({ task, onDelete }: TaskItemProps) => {
    return (
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                marginBottom: '8px',
                backgroundColor: '#f9f9f9',
                borderRadius: '4px',
                border: '1px solid #eee',
            }}
        >
            <span>{task.title}</span>
            <button
                onClick={() => onDelete(task.id)}
                style={{
                    padding: '4px 12px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            >
                Удалить
            </button>
        </li>
    );
};

export default TaskItem;
