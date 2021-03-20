import React,{useState,useContext} from 'react'
import {Button, TextField} from '@material-ui/core';
import { UserContext } from '../../App';
import firebase from './FirebaseSetup';
import { useHistory, useLocation } from 'react-router';
function Login({setIsNew}) {
    const [loggedUser, setLoggedUser]= useContext(UserContext);
    const [hasError, setHasError]= useState('');
    const [userData, setUserData]= useState({
        email: '',
        password: '',
    })
    let history = useHistory();
    let location = useLocation();
    const handleBlur= (e)=> {
        const newUserData= {...userData, [e.target.name]:e.target.value}
        setUserData(newUserData);
    }
    const handleSubmit= ()=> {
        firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {
            var user = userCredential.user;
            setLoggedUser(user);
            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setHasError(errorMessage);
        });
    }
    return (
        <div className='login'>
        <form >
            <h2 style={{margin: '5px 0'}}>Login</h2>
            <TextField fullWidth margin='normal' id="standard-basic" label="Email" name='email' onBlur={handleBlur} />

            <TextField fullWidth margin='normal' id="standard-basic" label="Password" name='password' onBlur={handleBlur} />

            <input type="checkbox" name='check'/><label htmlFor="check"> Remember me</label> <span style={{marginLeft:'135px'}} className='color-span'>Forgot password?</span>

            {hasError && <p style={{color:'red'}}>Sorry, email and password mismatched.</p>}
            <Button onClick={handleSubmit} style={{backgroundColor: 'salmon', margin: '30px 0 10px'}} fullWidth variant="contained">Login</Button>

            <p >Don't have an account? <span onClick={()=> setIsNew(true)} className='color-span'>Create one</span>.</p>
        </form>
     </div>
    )
}

export default Login
