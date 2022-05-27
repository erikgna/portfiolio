import { ColInput } from '../../pages/CreatePost/CreatePost.styled'
import { Button, ButtonBlue, Form, Input } from '../../styles/Global.styled'
import { Buttons } from './Authentication.styled'

export const Register:React.FC<{setIsLogin:React.Dispatch<React.SetStateAction<boolean>>}> = ( {setIsLogin} ) => {
  return (
    <Form>
        <h3>Create an account to create new posts</h3>
        <ColInput>
            <label htmlFor="email">Email</label>
            <Input type="email" name='email' placeholder='Email' />
        </ColInput>
        <ColInput>
            <label htmlFor="name">Name</label>
            <Input type="email" name='email' placeholder='Name' />
        </ColInput>
        <ColInput>
            <label htmlFor="password">Password</label>
            <Input type="password" name='password' placeholder='Password' />
        </ColInput>
        <ColInput>
            <label htmlFor="confirm-password">Confirm Password</label>
            <Input type="password" name='confirm-password' placeholder='Confirm Password' />
        </ColInput>
        <Buttons>
            <Button width={225}>Login</Button>
            <ButtonBlue style={{marginLeft: '24px'}} width={225} onClick={() => setIsLogin(true)}>Have an account?</ButtonBlue>
        </Buttons>
    </Form>
  )
}

export const Login:React.FC<{setIsLogin:React.Dispatch<React.SetStateAction<boolean>>}> = ( {setIsLogin} ) => {
    return (
        <Form>
            <h3>Enter to your account so you can view, create, edit or delete your posts</h3>
            <ColInput>
                <label htmlFor="email">Email</label>
                <Input type="email" name='email' placeholder='Email' />
            </ColInput>
            <ColInput>
                <label htmlFor="password">Password</label>
                <Input type="password" name='password' placeholder='Password' />
            </ColInput>
            <Buttons>
                <Button width={225}>Login</Button>
                <ButtonBlue style={{marginLeft: '24px'}} width={225} onClick={() => setIsLogin(false)}>Doesn't have an account?</ButtonBlue>
            </Buttons>
        </Form>
    )
  }
