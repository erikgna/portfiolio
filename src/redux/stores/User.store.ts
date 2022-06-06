import { AppDispatch } from '../index';
import { IUser } from '../../interfaces/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APISignin, APISignup } from '../../api/user';
import { AxiosResponse } from 'axios';
import Cookies from 'universal-cookie';
import { asyncUserPosts } from './Post.store';
import { setAuthError } from './Error.store';

const cookies = new Cookies()

const initialState:IUser = {
    userID: cookies.get('userID') || null,
    name: cookies.get('name') || null
}

const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login (state:IUser, action: PayloadAction<IUser>){
            state.userID = action.payload.userID;
            state.name = action.payload.name;
        },
        register (state:IUser, action: PayloadAction<IUser>){
            state.name = action.payload.name;
        },
        // editUser (state:IUser, action: PayloadAction<IUser>){
        //     state.name = action.payload.name;
        //     state.accessToken = action.payload.accessToken;
        // },
        // changePassword (state:IUser, action: PayloadAction<IUser>){
        //     state.accessToken = action.payload.accessToken;
        // },
        // changeToken (state:IUser, action: PayloadAction<IUser>){
        //     state.accessToken = action.payload.accessToken;
        // }
    }
})

// export const { login, register, editUser, changePassword, changeToken } = user.actions;
export const { login, register } = user.actions;
export default user.reducer;

export function asyncLogin(user:IUser): any {
    return async function (dispatch: AppDispatch){
        try {
             const response:AxiosResponse = await APISignin(user);

             cookies.set('Authorization', response.data['Authorization'], {
                 maxAge: 7200
             });
             cookies.set('name', response.data['name'], {
                maxAge: 7200
            });
            cookies.set('userID', response.data['userID'], {
                maxAge: 7200
            });

            dispatch(login(response.data));
            dispatch(asyncUserPosts(response.data['userID']))
        } catch (error:any) {
            dispatch(setAuthError(error['response']['data']));
        }
    }
}

export function asyncRegister(user:IUser): any {
    return async function (dispatch: AppDispatch){
        try {
            const response:AxiosResponse = await APISignup(user);
             
            if(response.status === 200) return true;
        } catch (error:any) {
            dispatch(setAuthError(error['response']['data']));
        }
    }
}

// export function asyncEditUser(user:IUser): any {
//     return async function (dispatch: AppDispatch){
//         if(user.accessToken !== undefined){
//             const response:AxiosResponse = await APIEditUser(user, user.accessToken);

//             user = response.data;
//             localStorage.setItem("token", response.data.accessToken);

//             if(response.status === 200) console.log("Sucesso");

//             dispatch(editUser(user));
//         }
//     }
// }

// export function asyncChangePassword(user:IUser): any {
//     return async function (dispatch: AppDispatch){
//         const response:AxiosResponse = await APIChangePassword(user);

//         if(response.status === 200) console.log("Sucesso")

//         dispatch(changePassword(user));
//     }
// }

// export function asyncChangeToken(user:IUser): any {
//     return async function (dispatch: AppDispatch){
//         const response:AxiosResponse = await APIChangeToken(user);

//         user.accessToken = response.data;
//         localStorage.setItem('token', response.data);

//         dispatch(changeToken(user));
//     }
// }