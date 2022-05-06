import api from ".";

import { LoginInterface, RegisterInterface, UserInterface } from '../interfaces/user'

export const signin = (login:LoginInterface) => api.post('/', login)
export const signup = (register:RegisterInterface) => api.post('', register)

export const editUser = (options:RegisterInterface, email:string) => api.put(`/${email}`, options)
export const changePassword = (user:UserInterface) => api.put(`/`, user)

export const changeToken = (user:UserInterface) => api.post(`/`, user)   