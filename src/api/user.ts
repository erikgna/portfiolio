import api from ".";

import { UserInterface } from '../interfaces/user';

export const APISignin = (login:UserInterface) => api.post('/user/login', login);
export const APISignup = (register:UserInterface) => api.post('/user/register', register);

export const APIEditUser = (options:UserInterface, email:string) => api.put(`/user/edit-user`, options);
export const APIChangePassword = (user:UserInterface) => api.post("/user/password-token", user);

export const APIChangeToken = (user:UserInterface) => api.post(`/user/change-password`, user);