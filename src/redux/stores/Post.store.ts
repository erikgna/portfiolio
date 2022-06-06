import { APIAllPosts, APINewPost, APIUpdatePost, APIChangeImage, APIDeletePost, APIUserPosts } from './../../api/post';
import { IPost } from './../../interfaces/post';
import { AppDispatch } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AxiosResponse } from 'axios';
// import { setAuthError } from './Error.store';

const initialState:IPost[] | number = [];

const post = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        allPosts (state:IPost[], action: PayloadAction<IPost[]>){
            state.splice(0, state.length);
            action.payload.forEach((post) => state.push(post));
        },
        userPosts (state:IPost[], action: PayloadAction<IPost[]>){
            state.splice(0, state.length);
            action.payload.forEach((post) => state.push(post));
        },
        newPost (state:IPost[], action: PayloadAction<IPost>){
            state.push(action.payload);
        },
        updatePost (state:IPost[], action: PayloadAction<IPost>){
            const updatedPostID:number = state.findIndex((post) => post.id === action.payload.id);
            if(updatedPostID !== -1) state[updatedPostID] = action.payload;
        },
        changeImage (state:IPost[], action: PayloadAction<IPost>){
            const updatedPostID:number = state.findIndex((post) => post.id === action.payload.id);
            if(updatedPostID !== -1) state[updatedPostID] = action.payload;
        },
        deletePost (state:IPost[], action: PayloadAction<IPost>){
            const index:number = state.findIndex((post) => post.id === action.payload.id)
            state.splice(index, 1);
        }
    }
})

export const { allPosts,userPosts, newPost, updatePost, changeImage, deletePost } = post.actions;
export default post.reducer;

export function asyncAllPosts(page:number): any {
    return async function (dispatch: AppDispatch){
        try {
            const response:AxiosResponse = await APIAllPosts(page);

            const posts:IPost[] = response.data;
            dispatch(allPosts(posts));
        } catch (error) {
            
        }
    }
}

export function asyncUserPosts(userID:number | undefined): any {
    return async function (dispatch: AppDispatch){
        try {
            const response:AxiosResponse = await APIUserPosts(userID);

            const posts:IPost[] = response.data;
            dispatch(userPosts(posts));
        } catch (error:any) {
            // console.log(error['response']['status'])
        }
    }
}

export function asyncNewPost(post:IPost, userID:number | undefined): any {
    return async function (dispatch: AppDispatch){
        try {
            const tempImage:File | string | undefined = post?.image;
            post.image = "";
            const response:AxiosResponse = await APINewPost(post, userID);

            if(tempImage) {
                post = {...post, id: response.data, image: tempImage};
                dispatch(asyncChangeImage(post));
            }
            
            if(response.status === 201) dispatch(newPost(post)); 
        } catch (error) {
            //window.location.assign("http://localhost:3000/error");
        }
    }
}

export function asyncUpdatePost(post:IPost): any {
    return async function (dispatch: AppDispatch){
        if(post.image) dispatch(asyncChangeImage(post));
        post.image = "";

        const response:AxiosResponse = await APIUpdatePost(post);        

        if(response.status === 200) dispatch(updatePost(post));
    }
}

export function asyncChangeImage(post:IPost): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIChangeImage(post);

        post = {...post, image: response.data}

        dispatch(changeImage(post));
    }
}

export function asyncDeletePost(post:IPost): any {
    return async function (dispatch: AppDispatch){
        const response:AxiosResponse = await APIDeletePost(post);

        if(response.status === 200) dispatch(deletePost(post));
    }
}