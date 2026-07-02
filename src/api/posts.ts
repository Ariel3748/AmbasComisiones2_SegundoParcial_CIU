import { request } from './client';
import type { Post } from '../types';

export const postsApi = {
  getPosts: (userId?: string) =>
    request<Post[]>(userId ? `/posts?userId=${userId}` : '/posts'),

  getPostById: (postId: string) =>
    request<Post>(`/posts/${postId}`),

  createPost: (postData: { description: string; author: string; tags: string[] }) =>
    request<Post>('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    }),

  updatePost: (postId: string, description: string, author:any) =>
    request<Post>(`/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ description, author }),
    }),

  deletePost: (postId: string) =>
    request<void>(`/posts/${postId}`, { method: 'DELETE' }),

  toggleLike: (postId: string, userId: string) =>
    request<{ liked: boolean; votes: number }>(`/posts/${postId}/like`, {
      method: 'POST',
      body: JSON.stringify({ userId }),
    }),
};
