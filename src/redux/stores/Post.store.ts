import { APIAllPosts, APINewPost, APIUpdatePost, APIChangeImage, APIDeletePost } from './../../api/post';
import { PostInterface } from './../../interfaces/post';
import { AppDispatch } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AxiosResponse } from 'axios';

const initialState:PostInterface[] = [];

const post = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        allPosts (state:PostInterface[], action: PayloadAction<PostInterface[]>){
            if(state.length === 0) action.payload.forEach((post) => state.push(post));
        },
        newPost (state:PostInterface[], action: PayloadAction<PostInterface>){
            state.push(action.payload);
        },
        updatePost (state:PostInterface[], action: PayloadAction<PostInterface>){
            const updatedPostID:number = state.findIndex((post) => post.id === action.payload.id);
            if(updatedPostID !== -1) state[updatedPostID] = action.payload;
        },
        changeImage (state:PostInterface[], action: PayloadAction<PostInterface>){
            state.forEach((post) => {
                if(action.payload.id === post.id){
                    post = action.payload;
                }
            });
        },
        deletePost (state:PostInterface[], action: PayloadAction<PostInterface>){
            const index:number = state.indexOf(action.payload);
            state.splice(index-1, 1);
        }
    }
})

export const { allPosts, newPost, updatePost, changeImage, deletePost } = post.actions;
export default post.reducer;

export function asyncAllPosts(): any {
    return async function (dispatch: AppDispatch){
        try {
            const response:AxiosResponse = await APIAllPosts();
            
            dispatch(allPosts(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export function asyncNewPost(post:PostInterface): any {
    return async function (dispatch: AppDispatch){
        try {
            const response:AxiosResponse = await APINewPost(post);

            post = {...post, id: response?.data}
            
            if(response.status === 201) dispatch(newPost(post)); 
        } catch (error) {
            console.log(error);
        }
    }
}

export function asyncUpdatePost(post:PostInterface): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIUpdatePost(post);

        if(response.status === 201) dispatch(updatePost(post));
    }
}

export function asyncChangeImage(post:PostInterface): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIChangeImage(post);

        dispatch(changeImage(response.data));
    }
}

export function asyncDeletePost(post:PostInterface): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIDeletePost(post);

        if(response.status === 200) dispatch(deletePost(post));
    }
}