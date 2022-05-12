import { UserType } from '../action-types/userTypes';
import { UserAction } from '../actions/userActions';
import { UserInterface } from './../../interfaces/user';

const initialState:UserInterface = {
    id: 0,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accessToken: '',
}

const reducer = (state: UserInterface = initialState, action: UserAction) => {
    switch(action.type){
        case UserType.LOGIN:
            return {...state, email: action.payload.email}
        case UserType.REGISTER:
            return state;
        default:
            return state;
    }
}

export default reducer;