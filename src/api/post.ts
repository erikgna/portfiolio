import { IPost } from './../interfaces/post';
import api from '.';

export const APIAllPosts = () => api.get('/posts');
// export const onePost = () => api.get('');

export const APINewPost = (post: IPost) => api.post('/posts', post);

export const APIUpdatePost = (post: IPost) => api.put(`/posts/${post.id}`, post);
export const APIChangeImage = (post: IPost) => api.put(`/posts/edit-image/${post.id}`, post);

export const APIDeletePost = (post: IPost) => api.delete(`/posts/${post.id}`);