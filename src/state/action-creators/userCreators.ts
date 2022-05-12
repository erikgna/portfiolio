import { UserAction } from './../actions/userActions';
import { Dispatch } from 'redux';
import { UserInterface } from './../../interfaces/user';
import { UserType } from './../action-types/userTypes';

export const login = (user: UserInterface) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserType.LOGIN,
            payload: user
        })
    }
}

export const register = (user: UserInterface) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserType.REGISTER,
            payload: user
        })
    }
}