
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ApiService } from '@/services/api';
import { toast } from 'sonner';

export function useApi<T>(baseUrl: string, resourceName: string) {
  const queryClient = useQueryClient();
  const api = new ApiService<T>(baseUrl);

  const getAll = useQuery({
    queryKey: [resourceName],
    queryFn: () => api.getAll(''),
  });

  const getOne = (id: string | number) => useQuery({
    queryKey: [resourceName, id],
    queryFn: () => api.get(`/${id}`),
  });

  const create = useMutation({
    mutationFn: (data: Partial<T>) => api.post('', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resourceName] });
      toast.success(`${resourceName} created successfully`);
    },
    onError: () => toast.error(`Failed to create ${resourceName}`),
  });

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: Partial<T> }) =>
      api.put(`/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resourceName] });
      toast.success(`${resourceName} updated successfully`);
    },
    onError: () => toast.error(`Failed to update ${resourceName}`),
  });

  const remove = useMutation({
    mutationFn: (id: string | number) => api.delete(`/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resourceName] });
      toast.success(`${resourceName} deleted successfully`);
    },
    onError: () => toast.error(`Failed to delete ${resourceName}`),
  });

  return {
    data: getAll.data,
    isLoading: getAll.isLoading,
    getOne,
    create: create.mutate,
    update: update.mutate,
    remove: remove.mutate,
  };
}
