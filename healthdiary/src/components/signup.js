import React from 'react';
import { AiOutlineCheck, AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import signUpImg from '../resources/imgaes/signup.svg';
import '../styles/authentication.css';


function Signup() {
    const auth_content = [
        {a_icon:<AiOutlineUser/>,a_label:'Username',a_input:'text'},
        {a_icon:<AiOutlineMail/>,a_label:'Email',a_input:'email'},
        {a_icon:<AiOutlineLock/>,a_label:'Password',a_input:'password'},
        {a_icon:<AiOutlineCheck/>,a_label:'Confirm Password',a_input:'password'}
    ]
    return (
        <>
        <div className='auth__container'>
           <img src={signUpImg} alt='sign up' className='auth__img'/>
           
           <div className='form__container'>
               <h2 className='form__heading'>Begin Your Journey</h2>
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
                    <div className='form__div'>
                     <div className = 'form__div-icon'>{<AiOutlineUser/>}</div>
                     <div className='form__div-input'>
                         <label className = 'form__label'>Type</label>
                         <select className='form__input'>
                            <option value = 'Patient'>Patient</option>
                            <option value = 'Doctor'>Doctor</option>
                            <option value = 'Hospital'>Hospital</option>
                         </select>
                     </div>
                    </div>    
               </form>
               <button className='auth__button'>Create Account</button>
           </div>
        </div>
        </>
    )
}

export default Signup
