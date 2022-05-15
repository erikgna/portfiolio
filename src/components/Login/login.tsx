import React from "react"

export const Login: React.FC<{inputChange:(event:React.ChangeEvent<HTMLInputElement>) => void}> = ( {inputChange} ) => {
    return (
    <form>
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
    </form>
  )
}
