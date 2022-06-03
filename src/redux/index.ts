import { useDispatch } from 'react-redux';
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userReducer from './stores/User.store';
import postReducer from './stores/Post.store';
import errorReducer from './stores/Error.store';

const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        error: errorReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;