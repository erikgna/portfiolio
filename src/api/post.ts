import { PostInterface } from './../interfaces/post';
import api from '.';

export const APIAllPosts = () => api.get('/posts');
// export const onePost = () => api.get('');

export const APINewPost = (post: PostInterface) => api.post('/posts', post);

export const APIUpdatePost = (post: PostInterface) => api.put(`/posts/${post.id}`, post);
export const APIChangeImage = (post: PostInterface) => api.put(`/posts/edit-image/${post.id}`, post);

export const APIDeletePost = (post: PostInterface) => api.delete(`/posts/${post.id}`);