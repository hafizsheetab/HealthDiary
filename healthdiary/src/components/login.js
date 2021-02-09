import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import loginImg from '../resources/imgaes/login.svg';
import '../styles/authentication.css';
import { getToken, getUser, setToken, setUser } from './Utility/localStorageAPI';


function Login({history}) {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password:''
    })
   
    const handleChange = (e) => {
        setLoginForm({...loginForm,[e.target.name]:e.target.value})
    }
    const handleFormSumbit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/api/auth', {
        email: loginForm.email,
        password: loginForm.password,
      }).then(function (res) {
        if (res.status === 200) {
          setToken(res.data.token);
         
          // console.log(getUser().userType);
          // history.push(`/${getUser().userType}/dashboard`)
         }
      }).then(function () {
         axios.defaults.headers.common['x-auth-token']=getToken()
          axios.get('http://localhost:5000/api/auth'
          ).then(function (res) {
            console.log(res);
            setUser(res.data)
          }).catch(function (err) {
              console.log(err);
            })
      }).then(function () {
        console.log(getUser().userType);
          history.push(`/${getUser().userType}/dashboard`)
      }).catch(function (err) {
        console.log(err);
      })
    console.log(loginForm);
      }

    return (
        <>
        <div className='auth__container'>
           <img src={loginImg} alt='Log in' className='auth__img'/>
           
           <div className='form__container'>
               <h2 className='form__heading'>Good to see you</h2>
               <form className='form__content' method="POST" onSubmit={handleFormSumbit}>
                   
                      <div className='form__div'>
                        <div className='form__div-icon'><AiOutlineMail/></div>
                        <div className='form__div-input'>
                        <label htmlFor='email' className='form__label'>Email</label>
                        <input name='email' type="email" className='form__input' value={loginForm.email} onChange={handleChange} />
                        </div>
                      </div>
                      

                   
                      <div className='form__div'>
                        <div className='form__div-icon'><AiOutlineLock/></div>
                        <div className='form__div-input'>
                        <label htmlFor="password" className='form__label'>Password</label>
                        <input name="password" type="password" className='form__input' value={loginForm.password} onChange={handleChange}/>
                        </div>
                      </div>
                          
               <button type="submit" className='auth__button'>Log in</button>
               </form>
           </div>
        </div>
        </>
    )
}

export default Login
