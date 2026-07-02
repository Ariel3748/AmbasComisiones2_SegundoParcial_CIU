import { request } from './client';
import type { Tag } from '../types';

export const tagsApi = {
  getTags: () => request<Tag[]>('/tags'),

  createTag: (name: string) =>
    request<Tag>('/tags', {
      method: 'POST',
      body: JSON.stringify({ name }),
    }),

  updateTag: (id: string, name: string) =>
    request<Tag>(`/tags/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name }),
    }),

  deleteTag: (id: string) =>
    request<void>(`/tags/${id}`, { method: 'DELETE' }),
};
