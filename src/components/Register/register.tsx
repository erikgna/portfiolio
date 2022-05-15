import React from "react"

export const Register: React.FC<{inputChange:(event:React.ChangeEvent<HTMLInputElement>) => void}> = ( {inputChange} ) => {
    return (
    <form>
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
    </form>
  )
}
