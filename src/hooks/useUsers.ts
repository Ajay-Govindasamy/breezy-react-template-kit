
import { useApi } from './useApi';
import { User } from '@/types/user';

export const useUsers = () => {
  return useApi<User>('https://api.example.com', 'users');
};
