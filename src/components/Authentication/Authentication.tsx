import { ColInput } from '../../pages/CreatePost/CreatePost.styled'
import { Form, Input } from '../../styles/Global.styled'

export const Register:React.FC<{inputChange:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void}> = ( {inputChange} ) => {
    return (
    <Form>
        <h3>Create an account to create new posts</h3>
        <ColInput>
            <label htmlFor="email">Email</label>
            <Input type="email" name='email' placeholder='Email' onChange={(e) => inputChange(e)} />
        </ColInput>
        <ColInput>
            <label htmlFor="name">Name</label>
            <Input type="text" name='name' placeholder='Name' onChange={(e) => inputChange(e)} />
        </ColInput>
        <ColInput>
            <label htmlFor="password">Password</label>
            <Input type="password" name='password' placeholder='Password' onChange={(e) => inputChange(e)} />
        </ColInput>
        <ColInput>
            <label htmlFor="confirm-password">Confirm Password</label>
            <Input type="password" name='confirmPassword' placeholder='Confirm Password' onChange={(e) => inputChange(e)} />
        </ColInput>
    </Form>
  )
}

export const Login:React.FC<{inputChange:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void}> = ( {inputChange} ) => {
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
        </Form>
    )
  }
