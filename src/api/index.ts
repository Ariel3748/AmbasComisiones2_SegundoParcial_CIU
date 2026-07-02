import { authApi } from './auth';
import { usersApi } from './users';
import { postsApi } from './posts';
import { tagsApi } from './tags';
import { commentsApi } from './comments';
import { imagesApi } from './images';

export const apiService = {
  ...authApi,
  ...usersApi,
  ...postsApi,
  ...tagsApi,
  ...commentsApi,
  ...imagesApi,
};

export type ApiService = typeof apiService;
