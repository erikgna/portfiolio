import { AppDispatch } from '../index';
import { IUser } from '../../interfaces/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APISignin, APISignup, APIEditUser, APIChangePassword, APIChangeToken } from '../../api/user';
import { AxiosResponse } from 'axios';

const initialState:IUser = {
    name: '',
    accessToken: ''
}

const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login (state:IUser, action: PayloadAction<IUser>){
            state.accessToken = action.payload.accessToken;
            state.name = action.payload.name;

            state.email = "";
            state.password = "";
        },
        register (state:IUser, action: PayloadAction<IUser>){
            state.name = action.payload.name;
            state.accessToken = action.payload.accessToken;
        
            state.email = "";
            state.password = "";
            state.confirmPassword = "";
        },
        editUser (state:IUser, action: PayloadAction<IUser>){
            state.name = action.payload.name;
            state.accessToken = action.payload.accessToken;
        },
        changePassword (state:IUser, action: PayloadAction<IUser>){
            state.accessToken = action.payload.accessToken;
        },
        changeToken (state:IUser, action: PayloadAction<IUser>){
            state.accessToken = action.payload.accessToken;
        }
    }
})

export const { login, register, editUser, changePassword, changeToken } = user.actions;
export default user.reducer;

export function asyncLogin(user:IUser): any {
    return async function (dispatch: AppDispatch){
        try {
            const response:AxiosResponse = await APISignin(user);

            user.accessToken = response.data;
            localStorage.setItem('token', response.data);

            dispatch(login(user));
        } catch (error) {
            console.log(error);
        }
    }
}

export function asyncRegister(user:IUser): any {
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

export function asyncEditUser(user:IUser): any {
    return async function (dispatch: AppDispatch){
        if(user.accessToken !== undefined){
            const response:AxiosResponse = await APIEditUser(user, user.accessToken);

            user = response.data;
            localStorage.setItem("token", response.data.accessToken);

            if(response.status === 200) console.log("Sucesso");

            dispatch(editUser(user));
        }
    }
}

export function asyncChangePassword(user:IUser): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIChangePassword(user);

        if(response.status === 200) console.log("Sucesso")

        dispatch(changePassword(user));
    }
}

export function asyncChangeToken(user:IUser): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIChangeToken(user);

        user.accessToken = response.data;
        localStorage.setItem('token', response.data);

        dispatch(changeToken(user));
    }
}