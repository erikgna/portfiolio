import { Login } from '../../components/Login/login'
import { Register } from '../../components/Register/register'

export const About = () => {
  return (
    <section>
        <div>
            <h2>Principais habilidades</h2>
            <div>
                <div>
                    <h1>OO</h1>
                    <strong>ReactJS</strong>
                </div>
                <div>
                    <h1>OO</h1>
                    <strong>NodeJS</strong>
                </div>
                <div>
                    <h1>OO</h1>
                    <strong>Flutter</strong>
                </div>
                <div>
                    <h1>OO</h1>
                    <strong>Java</strong>
                </div>
            </div>
        </div>
        <div>
            <h2>Skills Demonstration</h2>
            <div>
                <h3>Register</h3>
                <Register></Register>
            </div>
            <div>
                <h3>Login</h3>
                <Login></Login>
            </div>
        </div>
    </section>
  )
}
