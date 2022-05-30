import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { IUser } from '../../interfaces/user';
import { ColInput } from '../../pages/CreatePost/CreatePost.styled'
import { asyncRegister, asyncLogin } from '../../redux/stores/User.store'
import { Button, ButtonBlue, Form, Input } from '../../styles/Global.styled'
import { Buttons } from './Authentication.styled'

export const Register:React.FC<{setIsLogin:React.Dispatch<React.SetStateAction<boolean>>}> = ( {setIsLogin} ) => {
    const dispatch = useDispatch();

    const [registerForm, setRegisterForm] = useState<IUser>({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    });

    const inputChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        setRegisterForm({ ...registerForm, [event.target.name]: event.target.value });
    }

    const submit = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        dispatch(asyncRegister(registerForm));
    }

    return (
    <Form>
        <h3>Create an account to create new posts</h3>
        <ColInput>
            <label htmlFor="email">Email</label>
            <Input type="email" name='email' placeholder='Email' onChange={(e) => inputChange(e)} />
        </ColInput>
        <ColInput>
            <label htmlFor="name">Name</label>
            <Input type="email" name='email' placeholder='Name' onChange={(e) => inputChange(e)} />
        </ColInput>
        <ColInput>
            <label htmlFor="password">Password</label>
            <Input type="password" name='password' placeholder='Password' onChange={(e) => inputChange(e)} />
        </ColInput>
        <ColInput>
            <label htmlFor="confirm-password">Confirm Password</label>
            <Input type="password" name='confirm-password' placeholder='Confirm Password' onChange={(e) => inputChange(e)} />
        </ColInput>
        <Buttons>
            <Button width={225} onClick={(e) => submit(e)}>Register</Button>
            <ButtonBlue style={{marginLeft: '24px'}} width={225} onClick={() => setIsLogin(true)}>Have an account?</ButtonBlue>
        </Buttons>
    </Form>
  )
}

export const Login:React.FC<{setIsLogin:React.Dispatch<React.SetStateAction<boolean>>}> = ( {setIsLogin} ) => {
    const dispatch = useDispatch();

    const [loginForm, setLoginForm] = useState<IUser>({
        email: '',
        password: ''
    });

    const inputChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    }

    const submit = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        dispatch(asyncLogin(loginForm));
    }

    return (
        <Form>
            <h3>Enter to your account so you can view, create, edit or delete your posts</h3>
            <ColInput>
                <label htmlFor="email">Email</label>
                <Input type="email" name='email' placeholder='Email' onChange={(e) => inputChange(e)} />
            </ColInput>
            <ColInput>
                <label htmlFor="password">Password</label>
                <Input type="password" name='password' placeholder='Password' onChange={(e) => inputChange(e)} />
            </ColInput>
            <Buttons>
                <Button width={225} onClick={(e) => submit(e)}>Login</Button>
                <ButtonBlue style={{marginLeft: '24px'}} width={225} onClick={() => setIsLogin(false)}>Doesn't have an account?</ButtonBlue>
            </Buttons>
        </Form>
    )
  }
