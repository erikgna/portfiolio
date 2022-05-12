import { Login } from '../../components/Login/login';
import { Register } from '../../components/Register/register';
import { NewPost } from '../../components/NewPost/new_post';
import { Posts } from '../../components/Posts/posts';

export const About = () => {
  return (
    <section>
        <div>
            <h2>My Skills</h2>
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
                <h3>Register User</h3>
                <Register />
            </div>
            <div>
                <h3>Login User</h3>
                <Login />
            </div>
            <div>
                <h3>Register Product</h3>
                <NewPost />
            </div>
            <div>
                <h3>View Products</h3>
                    <Posts />
            </div>
        </div>
    </section>
  )
}
