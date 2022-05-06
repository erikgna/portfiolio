import React, { useState } from 'react'
import { signin, signup } from '../api/user'
import { LoginInterface, RegisterInterface, UserInterface } from '../interfaces/user'

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = React.createContext({})

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    
    const [user, setUser] = useState<UserInterface>({
        token: '',
        refreshToken: '',
        email: '',
        password: ''
    })

    const login = async (user:LoginInterface) => {
        try {
            await signin(user);
            return true;
        } catch (_) {
            return false;
        }
    }

    const register = async (user:RegisterInterface) => {
        try {
            await signup(user);
            return true;
        } catch (_) {
            return false;
        }
    }

    return <UserContext.Provider value={{user, login: login, register: register}}>
        {children}
    </UserContext.Provider>
}