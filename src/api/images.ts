import { request } from './client';
import type { PostImage } from '../types';

export const imagesApi = {
  getPostImages: (postId: string) =>
    request<PostImage[]>(`/postimages/post/${postId}`),

  createPostImage: (postImageData: { url: string; postId: string }) =>
    request<PostImage>('/postimages', {
      method: 'POST',
      body: JSON.stringify(postImageData),
    }),
};
