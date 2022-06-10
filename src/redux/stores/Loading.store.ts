import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoading } from '../../interfaces/loading';

const initialState:ILoading = {
    isLoading: false
};

const loading = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        setIsLoading (state:ILoading, action: PayloadAction<boolean>){
            console.log('was set' + action.payload);
            state.isLoading = action.payload;
        },
    }
})

export const { setIsLoading } = loading.actions;
export default loading.reducer;