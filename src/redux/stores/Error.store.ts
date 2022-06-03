import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:string = "";

const error = createSlice({
    name: 'error',
    initialState: initialState,
    reducers: {
        setError (state:string, action: PayloadAction<string>){
            state = action.payload;
        },
    }
})

export const { setError } = error.actions;
export default error.reducer;