import React, { useContext, useState } from "react"
import { UserContext } from "../../contexts/user_context"

import { LoginInterface } from "../../interfaces/user"

export const Login = () => {
    const [login, setLogin] = useState<LoginInterface>({ email: '', password: '' })
    const name = useContext(UserContext)

    const inputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        setLogin({ ...login, [event.target.name]: event.target.value })
    }

    const submit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(name)
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
