import React from 'react';
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import loginImg from '../resources/imgaes/login.svg';
import '../styles/authentication.css';


function Login() {
    const auth_content = [
        {a_icon:<AiOutlineMail/>,a_label:'Email',a_input:'email'},
        {a_icon:<AiOutlineLock/>,a_label:'Password',a_input:'password'}
    ]
    return (
        <>
        <div className='auth__container'>
           <img src={loginImg} alt='Log in' className='auth__img'/>
           
           <div className='form__container'>
               <h2 className='form__heading'>Good to have you back</h2>
               <form className='form__content' method="POST">
                    {auth_content.map(con =>
                     (
                      <div className='form__div'>
                        <div className='form__div-icon'>{con.a_icon}</div>
                        <div className='form__div-input'>
                        <label className='form__label'>{con.a_label}</label>
                        <input type={con.a_input} className='form__input' />
                        </div>
                      </div>
                     )
                    )}    
               </form>
               <button className='auth__button'>Log in</button>
           </div>
        </div>
        </>
    )
}

export default Login
