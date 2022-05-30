// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { IUser } from '../../interfaces/user';
// import { RootState } from '../../redux';
// import { asyncChangePassword } from '../../redux/stores/User.store';

// export const ForgotPassword = () => {
//     const user:IUser = useSelector((state: RootState) => state.user);
//     const dispatch = useDispatch();

//     const [formData, setFormData] = useState<IUser>({password: '', confirmPassword: ''});

//     useEffect(() => {
//         const url:string  = window.location.href;
//         if(url === user.accessToken) console.log("Sucesso");
//     },[user.accessToken])

//     return (
//     <div>
//         <h2>Forgot my password</h2>
//         {user?
//          <p>An email was send to your registred email, please access the link sended.</p>
//         :
//         <form>
//             <h4>Changing password</h4>
//             <label htmlFor="password">New Password</label>
//             <input type="text" name="password" id="password" placeholder='New password...' onChange={(e) => setFormData({...formData, password: formData.password})} />
//             <label htmlFor="confirmPassword">Confirm new password</label>
//             <input type="text" name="confirmPassword" id="confirm-password" placeholder='Confirm password...' onChange={(e) => setFormData({...formData, confirmPassword: formData.confirmPassword})} />
//         </form>
//         }
//         <button onClick={() => dispatch(asyncChangePassword(formData))}>Send</button>
//     </div>
//   )
// }
export {};