import { IPost } from './../interfaces/post';
import api from '.';

export const APIPagesPosts = () => api.get(`/posts/pages`);
export const APIAllPosts = (page:number) => api.get(`/posts/${page}`);
export const APIUserPosts = (userID:number | undefined) => api.get(`/posts/user-posts/${userID}`);
// export const onePost = () => api.get('');

export const APINewPost = (post: IPost, userID:number | undefined) => api.post(`/posts/create/${userID}`, post);

export const APIUpdatePost = (post: IPost) => api.put(`/posts/${post.id}`, post);
export const APIChangeImage = (post: IPost) => api.put(`/posts/edit-image/${post.id}`, post, { headers: {"Content-Type": "multipart/form-data"} });

export const APIDeletePost = (post: IPost) => api.delete(`/posts/${post.id}`);