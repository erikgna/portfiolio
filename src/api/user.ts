import api from ".";

import { UserInterface } from '../interfaces/user'

export const signin = (login:UserInterface) => api.post('/', login)
export const signup = (register:UserInterface) => api.post('', register)

export const editUser = (options:UserInterface, email:string) => api.put(`/${email}`, options)
export const changePassword = (user:UserInterface) => api.put(`/`, user)

export const changeToken = (user:UserInterface) => api.post(`/`, user)   