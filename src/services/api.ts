
export class ApiService<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async getAll(endpoint: string): Promise<T[]> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async post(endpoint: string, data: Partial<T>): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async put(endpoint: string, data: Partial<T>): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async delete(endpoint: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }
}

// Add TodoAPI implementation using the generic ApiService
import { Todo, CreateTodoInput, UpdateTodoInput } from '@/types/todo';

const API_URL = 'https://jsonplaceholder.typicode.com';

class TodoApiService {
  private api: ApiService<Todo>;

  constructor() {
    this.api = new ApiService<Todo>(API_URL);
  }

  async getAll(): Promise<Todo[]> {
    return this.api.getAll('/todos');
  }

  async getById(id: number): Promise<Todo> {
    return this.api.get(`/todos/${id}`);
  }

  async create(data: CreateTodoInput): Promise<Todo> {
    return this.api.post('/todos', data);
  }

  async update(id: number, data: UpdateTodoInput): Promise<Todo> {
    return this.api.put(`/todos/${id}`, data);
  }

  async delete(id: number): Promise<void> {
    return this.api.delete(`/todos/${id}`);
  }
}

// Export the TodoAPI instance
export const TodoAPI = new TodoApiService();
