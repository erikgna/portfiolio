import React, { useState } from 'react';
import { RootState } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../components/Login/Login';
import { Register } from '../../components/Register/Register';

import { UserInterface } from '../../interfaces/user';
import { asyncLogin, asyncRegister } from '../../redux/stores/User.store';

export const Authentication = () => {
    const dispatch = useDispatch();
    const user:UserInterface = useSelector((state: RootState) => state.user);

    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [formData, setFormData] = useState<UserInterface>({
        name: '',
        email: '', 
        password: '', 
        confirmPassword: '' ,
        accessToken: ''
    });
    
    const inputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const submit = () => {
        isLogin? dispatch(asyncLogin(formData)) : dispatch(asyncRegister(formData));
    }

  return (
      <div>
          {user&& <h1>Bem-vindo {user?.name}</h1>}
            { 
            isLogin? 
                <Login inputChange={inputChange}></Login>
                :
                <Register inputChange={inputChange}></Register> 
            }
            <input onClick={submit} type="submit" value={'Sign In'} />
            <small>
                { isLogin? "Doesn't have an account yet? " : "Already has an account? " }
                <strong 
                    onClick={() => { isLogin? setIsLogin(false) : setIsLogin(true) }}>
                        { isLogin? "Sign Up" : "Sign In" }
                </strong>
            </small>
      </div>
  )
}
