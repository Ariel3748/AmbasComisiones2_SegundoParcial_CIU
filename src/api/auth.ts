import { request } from './client';
import type { User } from '../types';

export const authApi = {
  loginUser: (nickName: string, password: string) =>
    request<User>('/users/login', {
      method: 'POST',
      body: JSON.stringify({ nickName, password }),
    }),
};
