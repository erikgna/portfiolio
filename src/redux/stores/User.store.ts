import { AppDispatch } from '../index';
import { UserInterface } from '../../interfaces/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APISignin, APISignup, APIEditUser, APIChangePassword, APIChangeToken } from '../../api/user';
import { AxiosResponse } from 'axios';

const initialState:UserInterface = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accessToken: '',
}

const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login (state:UserInterface, action: PayloadAction<UserInterface>){
            state.accessToken = action.payload.accessToken;
        },
        register (state:UserInterface, action: PayloadAction<UserInterface>){
            state.name = action.payload.name;
            state.accessToken = action.payload.accessToken;
        },
        editUser (state:UserInterface, action: PayloadAction<UserInterface>){
            state.accessToken = action.payload.accessToken;
        },
        changePassword (state:UserInterface, action: PayloadAction<UserInterface>){
            state.accessToken = action.payload.accessToken;
        },
        changeToken (state:UserInterface, action: PayloadAction<UserInterface>){
            state.accessToken = action.payload.accessToken;
        }
    }
})

export const { login, register, editUser, changePassword, changeToken } = user.actions;
export default user.reducer;

export function asyncLogin(user:UserInterface): any {
    return async function (dispatch: AppDispatch){
        try {
            const response:AxiosResponse = await APISignin(user);

            user.accessToken = response.data;
            localStorage.setItem('token', response.data);

            console.log(response.data);

            dispatch(login(user));
        } catch (error) {
            console.log(error);
        }
    }
}

export function asyncRegister(user:UserInterface): any {
    return async function (dispatch: AppDispatch){
        try {
            const response:AxiosResponse = await APISignup(user);

            user.accessToken = response.data;
            localStorage.setItem('token', response.data);

            dispatch(register(user));   
        } catch (error) {
            console.log(error);
        }
    }
}

export function asyncEditUser(user:UserInterface): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIEditUser(user, user.email);

        user = response.data;
        localStorage.setItem("token", response.data.accessToken);

        if(response.status === 200) console.log("Sucesso");

        dispatch(editUser(user));
    }
}

export function asyncChangePassword(user:UserInterface): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIChangePassword(user);

        if(response.status === 200) console.log("Sucesso")

        dispatch(changePassword(user));
    }
}

export function asyncChangeToken(user:UserInterface): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIChangeToken(user);

        user.accessToken = response.data;
        localStorage.setItem('token', response.data);

        dispatch(changeToken(user));
    }
}