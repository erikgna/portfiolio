import api from ".";

import { IUser } from '../interfaces/user';

export const APISignin = (login:IUser) => api.post('/user/login', login);
export const APISignup = (register:IUser) => api.post('/user/register', register);

export const APIEditUser = (options:IUser, email:string) => api.put(`/user/edit-user`, options);
export const APIChangePassword = (user:IUser) => api.post("/user/password-token", user);

export const APIChangeToken = (user:IUser) => api.post(`/user/change-password`, user);