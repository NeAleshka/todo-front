const API_URL = 'http://localhost:3000/tasks';

export interface Task {
  id: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
}

export const taskService = {
  // Получить все задачи

  async getAll(): Promise<Task[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Ошибка загрузки задач');
    }
    return (await response.json()) as Task[];
  },

  // Создать новую задачу
  async create(title: string): Promise<Task> {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    if (!response.ok) {
      throw new Error('Ошибка создания задачи');
    }
    return (await response.json()) as Task;
  },

  // Удалить задачу по ID
  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok && response.status !== 404) {
      throw new Error('Ошибка удаления задачи');
    }
  },
};
