import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from '../../interfaces/error';

const initialState:IError = {
    authErrorMessage: "",
    postErrorMessage: ""
};

const error = createSlice({
    name: 'error',
    initialState: initialState,
    reducers: {
        setAuthError (state:IError, action: PayloadAction<string>){
            state.authErrorMessage = action.payload;
        },
        setPostError (state: IError, action: PayloadAction<string>){
            state.postErrorMessage = action.payload;
        }
    }
})

export const { setAuthError, setPostError } = error.actions;
export default error.reducer;