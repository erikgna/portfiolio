import React, { useState } from "react";
import { UserInterface } from "../../interfaces/user";

// import { useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { actionCreators, State } from "../../state";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";
import { RootState } from "../../features/store";

export const Login = () => {
    // const dispatch = useDispatch();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    // const { login } = bindActionCreators(actionCreators, dispatch);
    // const user = useSelector((state: State) => state.user)

    const [loginForm, setLoginForm] = useState<UserInterface>({ 
        id: 0, 
        name: '',
        email: '', 
        password: '', 
        confirmPassword: '' ,
        accessToken: '' 
    })

    const inputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }

    const submit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // login(loginForm);
        // console.log(user);

        dispatch(login(loginForm))
        console.log(user);
    }

    return (
    <form onSubmit={(e) => submit(e)}>
        <strong>Login with your already registred account</strong>
        <div>
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                name="email"
                placeholder="Type your email" 
                onChange={(e) => inputChange(e)}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                name="password"
                placeholder="Type your password" 
                onChange={(e) => inputChange(e)}
            />
        </div>
        <input type="submit" value={'Sign In'} />
    </form>
  )
}
