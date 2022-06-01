import { APIAllPosts, APINewPost, APIUpdatePost, APIChangeImage, APIDeletePost } from './../../api/post';
import { IPost } from './../../interfaces/post';
import { AppDispatch } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AxiosResponse } from 'axios';

const initialState:IPost[] = [];

const post = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        allPosts (state:IPost[], action: PayloadAction<IPost[]>){
            if(state.length === 0) action.payload.forEach((post) => state.push(post));
        },
        newPost (state:IPost[], action: PayloadAction<IPost>){
            state.push(action.payload);
        },
        updatePost (state:IPost[], action: PayloadAction<IPost>){
            const updatedPostID:number = state.findIndex((post) => post.id === action.payload.id);
            if(updatedPostID !== -1) state[updatedPostID] = action.payload;
        },
        changeImage (state:IPost[], action: PayloadAction<IPost>){
            state.forEach((post) => {
                if(action.payload.id === post.id){
                    post = action.payload;
                }
            });
        },
        deletePost (state:IPost[], action: PayloadAction<IPost>){
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
            
            const posts:IPost[] = response.data;
            dispatch(allPosts(posts));
        } catch (error) {
            console.log(error);
        }
    }
}

export function asyncNewPost(post:IPost): any {
    return async function (dispatch: AppDispatch){
        try {
            const response:AxiosResponse = await APINewPost(post);
            console.log(response)

            post = {...post, id: response?.data};
            if(post.image) await asyncChangeImage(post);
            
            if(response.status === 201) dispatch(newPost(post)); 
        } catch (error) {
            window.location.assign("http://localhost:3000/error");
        }
    }
}

export function asyncUpdatePost(post:IPost): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIUpdatePost(post);

        if(post.image) await asyncChangeImage(post);

        if(response.status === 201) dispatch(updatePost(post));
    }
}

export function asyncChangeImage(post:IPost): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIChangeImage(post);

        dispatch(changeImage(response.data));
    }
}

export function asyncDeletePost(post:IPost): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIDeletePost(post);

        if(response.status === 200) dispatch(deletePost(post));
    }
}