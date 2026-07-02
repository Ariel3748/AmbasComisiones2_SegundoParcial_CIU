import { request } from './client';
import type { Comment } from '../types';

export const commentsApi = {
  getCommentsByPost: (postId: string) =>
    request<Comment[]>(`/comments/post/${postId}`),

  createComment: (commentData: { postId: string; text: string; author: string }) =>
    request<Comment>('/comments', {
      method: 'POST',
      body: JSON.stringify(commentData),
    }),
};
