
import { create } from 'zustand';
import { Todo } from '@/types/todo';

interface TodoStore {
  selectedTodo: Todo | null;
  setSelectedTodo: (todo: Todo | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  selectedTodo: null,
  setSelectedTodo: (todo) => set({ selectedTodo: todo }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
