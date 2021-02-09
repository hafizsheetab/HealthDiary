import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlineLock, AiOutlineMail, AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import signUpImg from '../resources/imgaes/signup.svg';
import '../styles/authentication.css';


function Signup({history}) {
    const [signupForm, setSignupForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType:'',
        passwordError: '',
        confirmPasswordError:''
        
    })

    const handleChange = (e) => {
        setSignupForm({...signupForm,[e.target.name]:e.target.value})
    }
    const handleFormSumbit = (e) => {
      e.preventDefault();
      if (validation(signupForm.password, signupForm.confirmPassword)) {
        // axios.post('http://localhost:5000/api/users', {
        //     name: signupForm.name,
        //     email: signupForm.email,
        //     password: signupForm.password,
        //     userType:signupForm.userType
        // }).then(function (response) {
        //     if (response.data.status) {
        //       history.push('/login');
        //     }
        // }).catch(function (err) {
        //     console.log(err);
        // })
        console.log(signupForm)
      }
    console.log(signupForm);
  }
  const validation = (password,confirmPassword) => {
    let passwordError = "";
    let confirmPasswordError = "";
    if (password.length<5){
      passwordError = "Password should be atleast 4 character long";
    }
    if (passwordError) {
      setSignupForm({ passwordError })
      return false;
    }
    if (password !== confirmPassword) {
      confirmPasswordError = "Password doesn't match";
    }
    if (confirmPasswordError) {
      setSignupForm({ confirmPasswordError })
      return false;
    }
     return true;
  }
    
    return (
        <>
        <div className='auth__container'>
           <img src={signUpImg} alt='sign up' className='auth__img'/>
           
           <div className='form__container'>
               <h2 className='form__heading'>Begin Your Journey</h2>
               <form className='form__content' method="POST" onSubmit={handleFormSumbit} >
                   
                      <div className='form__div'>
                        <div className='form__div-icon'><AiOutlineUser /></div>
                        <div className='form__div-input'>
                        <label htmlFor='name' className='form-label'>Fullname</label>
                                <input name='name' type='text' className='form__input' value={signupForm.name} onChange={handleChange} required/>
                        </div>
                      </div>
                
                      <div className='form__div'>
                        <div className='form__div-icon'><AiOutlineMail /></div>
                        <div className='form__div-input'>
                        <label htmlFor='email' className='form-label'>Email</label>
                                <input name='email' type='email' className='form__input' value={signupForm.email} onChange={handleChange} required/>
                        </div>
                        </div>

                      <div className='form__div'>
                        <div className='form__div-icon'><AiOutlineLock /></div>
                        <div className='form__div-input'>
                        <label htmlFor='password' className='form-label'>Password</label>
                                <input name='password' type='password' className='form__input' value={signupForm.password} onChange={handleChange} required/>
                        </div>
                        </div>
                         <div>{signupForm.passwordError}</div>

                      <div className='form__div'>
                        <div className='form__div-icon'><AiOutlineCheck /></div>
                        <div className='form__div-input'>
                        <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                                <input name='confirmPassword' type='password' className='form__input' value={signupForm.confirmPassword} onChange={handleChange} required/>
                        </div>
                      </div>
                      <div>{signupForm.confirmPasswordError}</div>  

                    <div className='form__div'>
                     <div className = 'form__div-icon'>{<AiOutlineUsergroupAdd/>}</div>
                     <div className='form__div-input'>
                         <label className = 'form-label'>Type</label>
                         <select className='form__input' type='text' name='userType' value={signupForm.userType} onChange={handleChange} required>
                             <option value="" defaultValue disabled hidden>Choose here</option>
                            <option value = 'patient'>Patient</option>
                            <option value = 'doctor'>Doctor</option>
                            <option value = 'hospital'>Hospital</option>
                         </select>
                     </div>
                    </div>    
               <button type="submit" className='auth__button'>Create Account</button>
               </form>
           </div>
        </div>
        </>
    )
}

export default Signup
