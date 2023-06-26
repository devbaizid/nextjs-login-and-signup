"use client"
import React from 'react'
import  { useState } from 'react';
import Link from 'next/link';
const register = () => {

    const [loginLeft, setLoginLeft] = useState('50px');
    const [registerLeft, setRegisterLeft] = useState('-400px');
    const [btnLeft, setBtnLeft] = useState('0px');
  


    

    const handleRegister = () => {
      setLoginLeft('-400px');
      setRegisterLeft('50px');
      setBtnLeft('110px');
    };

  
    const handleLogin = () => {
        setLoginLeft('50px');
        setRegisterLeft('450px');
        setBtnLeft('0px');
      };

  return (

<div className="hero">
<div className="form-box">
<div className="button-box">
    <div id="btn" style={{ left: btnLeft }}></div>
    <button type='button' className="toggle-btn"  onClick={handleLogin}>Login</button>
    <button type='button' className="toggle-btn" onClick={handleRegister}>Register</button>

</div>
<form id='login' className="input-group" style={{ left: loginLeft }}>
<input type="text" className="input-field" placeholder="Username" />
<input type="password" className="input-field" placeholder="Enter Your Password" />
<div className="flex">

</div>
<br></br>
<button type="submit" className="submit-btn ">Log in</button>
</form>


<form id='register' className="input-group" style={{ left: registerLeft }}>
<input type="text" className="input-field" placeholder="Username" />
<input type="email" className="input-field" placeholder="Enter Your email" />
<input type="password" className="input-field" placeholder="Enter Your password" />

<input type="checkbox" className="chech-box" id="" /><span className="chech-box-span">I agree to <Link href="" className='text-blue-500'>terms</Link>  </span>

<button type="submit" className="submit-btn">Register</button>
</form>
    </div>
</div>
  )
}

export default register
