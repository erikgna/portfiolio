import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Login, Register } from '../../components/Authentication/Authentication'
import { Buttons } from '../../components/Authentication/Authentication.styled'
import { IError } from '../../interfaces/error'
import { IUser } from '../../interfaces/user'
import { RootState } from '../../redux'
import { setAuthError } from '../../redux/stores/Error.store'
import { asyncLogin, asyncRegister } from '../../redux/stores/User.store'
import { Button, ButtonBlue } from '../../styles/Global.styled'
import { ErrorMessage } from '../CreatePost/CreatePost.styled'
import { AuthPage } from './Auth.styled'

export const Auth = () => {
    const error:IError = useSelector((state: RootState) => state.error);
    const dispatch = useDispatch();

    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [dataForm, setDataForm] = useState<IUser>({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    });

    const inputChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    }

    const submit = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        
        if(!isLogin){
            dispatch(asyncRegister(dataForm));
            if(error.authErrorMessage === "") setIsLogin(true);
            return;
        }
        dispatch(asyncLogin(dataForm));
    }

    return (
        <AuthPage>
            <div>
                {isLogin? <Login inputChange={inputChange} /> :  <Register inputChange={inputChange} />}
                <ErrorMessage>{error.authErrorMessage}</ErrorMessage>
                <Buttons>
                    <Button width={225} onClick={(e) => submit(e)}>{isLogin? 'Login' : 'Register'}</Button>
                    <ButtonBlue style={{marginLeft: '24px'}} width={225} onClick={() => {
                        isLogin? setIsLogin(false) : setIsLogin(true)
                        dispatch(setAuthError(""));
                        }}>{isLogin? "Doesn't have an account?" : 'Have an account?'}</ButtonBlue>
                </Buttons>
            </div>
        </AuthPage>
    )
}
