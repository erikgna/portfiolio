import { signin, signup } from '../../api/user';
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

const reducer = async (state: UserInterface = initialState, action: UserAction) => {
    switch(action.type){
        case UserType.LOGIN:
            localStorage.setItem('accessToken', await (await signin(action.payload)).data);
            return {
                ...state, 
                name: action.payload.name,
                accessToken: await (await signin(action.payload)).data
            }
        case UserType.REGISTER:
            localStorage.setItem('accessToken', (await signup(action.payload)).data);    
            return {
                ...state,
                name: action.payload.name, 
                accessToken: (await signup(action.payload)).data
            };
        case UserType.EDIT:
            return {...state}
        default:
            return state;
    }
}

export default reducer;