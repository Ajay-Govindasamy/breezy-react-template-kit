
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TodoAPI } from '@/services/api';
import { CreateTodoInput, UpdateTodoInput } from '@/types/todo';
import { toast } from 'sonner';

export const useTodos = () => {
  const queryClient = useQueryClient();

  const { data: todos = [], isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: TodoAPI.getAll,
  });

  const createTodo = useMutation({
    mutationFn: (newTodo: CreateTodoInput) => TodoAPI.create(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      toast.success('Todo created successfully');
    },
    onError: () => toast.error('Failed to create todo'),
  });

  const updateTodo = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateTodoInput }) => 
      TodoAPI.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      toast.success('Todo updated successfully');
    },
    onError: () => toast.error('Failed to update todo'),
  });

  const deleteTodo = useMutation({
    mutationFn: (id: number) => TodoAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      toast.success('Todo deleted successfully');
    },
    onError: () => toast.error('Failed to delete todo'),
  });

  return {
    todos,
    isLoading,
    createTodo: createTodo.mutate,
    updateTodo: updateTodo.mutate,
    deleteTodo: deleteTodo.mutate,
  };
};
