import { UserType } from './../action-types/userTypes';
import { UserInterface } from '../../interfaces/user';

interface LoginAction {
    type: UserType.LOGIN,
    payload: UserInterface
}

interface RegisterAction {
    type: UserType.REGISTER,
    payload: UserInterface
}

export type UserAction = LoginAction | RegisterAction;