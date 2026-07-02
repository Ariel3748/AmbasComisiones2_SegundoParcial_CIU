import { request } from './client';
import type { User } from '../types';

export const usersApi = {
  getUsers: () => request<User[]>('/users'),

  getUserByNickName: (nickName: string) =>
    request<User>(`/users/${nickName}`),

  createUser: (userData: Record<string, unknown>) =>
    request<User>('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  followUser: (followerNick: string, targetNick: string) =>
    request<{ message: string }>('/users/follow', {
      method: 'POST',
      body: JSON.stringify({ followerNick, targetNick }),
    }),
};
