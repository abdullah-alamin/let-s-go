import React, {useState} from 'react'
import Signup from '../Signup/Signup';
import EasyLogin from './EasyLogin';
import Login from './Login';

function LoginSignUp() {
    const [isNew, setIsNew]= useState(true);
    return (
        <div className='loginWrap'>
        {isNew?
        <Signup setIsNew={setIsNew}></Signup>:
        <Login setIsNew={setIsNew}></Login>
        }
       <EasyLogin></EasyLogin>
       </div>
    )
}

export default LoginSignUp
