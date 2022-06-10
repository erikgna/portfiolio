import { AppDispatch } from '../index';
import { IUser } from '../../interfaces/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APISignin, APISignup } from '../../api/user';
import { AxiosResponse } from 'axios';
import Cookies from 'universal-cookie';
import { asyncUserPosts } from './Post.store';
import { setAuthError } from './Error.store';
import { setIsLoading } from './Loading.store';

const cookies = new Cookies();

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
    }
})

export const { login, register } = user.actions;
export default user.reducer;

export function asyncLogin(user:IUser): any {
    return async function (dispatch: AppDispatch){
        try {
            dispatch(setIsLoading(true));
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
            dispatch(asyncUserPosts(response.data['userID']));
            dispatch(setIsLoading(false));

            window.location.href = 'https://erikna.com/create-post';
        } catch (error:any) {
            dispatch(setIsLoading(false));
            if(error['response']['data'] === undefined){
                dispatch(setAuthError('An unexpected error occurred.'));
                return;
            }
            dispatch(setAuthError(error['response']['data']));
        }
    }
}

export function asyncRegister(user:IUser): any {
    return async function (dispatch: AppDispatch){
        try {
            dispatch(setIsLoading(true));
            const response:AxiosResponse = await APISignup(user);
            dispatch(setIsLoading(false));
            if(response.status === 200) return true;
        } catch (error:any) {
            dispatch(setIsLoading(false));
            if(error['response']['data'] === undefined){
                dispatch(setAuthError('An unexpected error occurred.'));
                return;
            }
            dispatch(setAuthError(error['response']['data']));
        }
    }
}
