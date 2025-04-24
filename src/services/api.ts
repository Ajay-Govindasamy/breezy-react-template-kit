
import { CreateTodoInput, Todo, UpdateTodoInput } from "@/types/todo";

const API_URL = "https://jsonplaceholder.typicode.com";

export const TodoAPI = {
  getAll: async (): Promise<Todo[]> => {
    const response = await fetch(`${API_URL}/todos`);
    if (!response.ok) throw new Error('Failed to fetch todos');
    return response.json();
  },

  getById: async (id: number): Promise<Todo> => {
    const response = await fetch(`${API_URL}/todos/${id}`);
    if (!response.ok) throw new Error('Failed to fetch todo');
    return response.json();
  },

  create: async (todo: CreateTodoInput): Promise<Todo> => {
    const response = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error('Failed to create todo');
    return response.json();
  },

  update: async (id: number, todo: UpdateTodoInput): Promise<Todo> => {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error('Failed to update todo');
    return response.json();
  },

  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete todo');
  },
};
