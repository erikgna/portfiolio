import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from '../../interfaces/error';

const initialState:IError = {
    authErrorMessage: ""
};

const error = createSlice({
    name: 'error',
    initialState: initialState,
    reducers: {
        setAuthError (state:IError, action: PayloadAction<string>){
            state.authErrorMessage = action.payload;
        },
    }
})

export const { setAuthError } = error.actions;
export default error.reducer;