import React, { useState } from "react"
import { UserInterface } from "../../interfaces/user"

export const Register = () => {
    const [register, setRegister] = useState<UserInterface>({
        id: 0, 
        name: '',
        email: '', 
        password: '', 
        confirmPassword: '' ,
        accessToken: '' 
    })
    
    const inputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        setRegister({ ...register, [event.target.name]: event.target.value })
    }

    const submit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(register)
    }

    return (
    <form onSubmit={(e) => submit(e)}>
        <strong>Register a new account</strong>
        <div>
            <label htmlFor="fullName">Full Name</label>
            <input 
                type="text"
                name="fullName"
                placeholder="Type your fullname" 
                onChange={(e) => inputChange(e)}
            />
        </div>
        <div>
            <label htmlFor="phone">Phone</label>
            <input 
                type="text"
                name="phone"
                placeholder="Type your phone" 
                onChange={(e) => inputChange(e)}
            />
        </div>
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
        <div>
            <label htmlFor="password">Confirm Password</label>
            <input 
                type="password"
                name="confirmPassword"
                placeholder="Type your password again" 
                onChange={(e) => inputChange(e)}
            />
        </div>
        <input type="submit" value={'Sign Up'} />
    </form>
  )
}
