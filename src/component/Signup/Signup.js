import React, {useState, useContext} from 'react'
import {Button, TextField} from '@material-ui/core';
import './signup.css'
import firebase from '../Login/FirebaseSetup'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { useForm } from 'react-hook-form';
function Signup({setIsNew}) {
    const [loggedUser, setLoggedUser]= useContext(UserContext);
    const [errMsg, setErrMsg]= useState('');
    const [userData, setUserData]= useState({
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
    })
    let history = useHistory();
    let location = useLocation();
    const { register, handleSubmit, watch, errors } = useForm();

    const handleBlur= (e)=> {
        const newUserData= {...userData, [e.target.name]:e.target.value}
        setUserData(newUserData);
    }
    const onSubmit= ()=> {
        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {
            var user = userCredential.user;
            setLoggedUser(userData);
            var user = firebase.auth().currentUser;
            user.updateProfile({
            displayName: userData.name,
            }).then(function() {
                let { from } = location.state || { from: { pathname: "/" } };
                history.replace(from);
            }).catch(function(error) {
            console.log(error);
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            setErrMsg(errorMessage);
        });
    }
    return (
        <div className='signup'>
           <form onSubmit={(e)=> e.preventDefault()}>
               <h2 style={{margin: '5px 0'}}>Create an account</h2>
                <TextField onBlur={handleBlur} fullWidth margin='normal' id="standard-basic" label="Name" name="name" required inputRef={register({ required: true })} />
                {errors.name && <span style={{color: 'red'}}>Name is required</span>}

                <TextField onBlur={handleBlur} fullWidth margin='normal' id="standard-basic" label="Email" name='email' required inputRef={register({ required: true, pattern: /\S+@\S+\.\S+/})} />
                {errors.email && <span style={{color: 'red'}}>Please, enter a valid email address</span>}

                <TextField onBlur={handleBlur} fullWidth margin='normal' id="standard-basic" label="Password" name='password' required inputRef={register({ required: true, minLength: 6})} />
                {errors.password && <span style={{color: 'red'}}>Password must be atleast 6 character long</span>}

                <TextField onBlur={handleBlur} fullWidth margin='normal' id="standard-basic" label="Confirm Password" name='passwordCheck' required  inputRef={register({ required: true, validate: value=> value===userData.password})} />
                {errors.passwordCheck && <span style={{color: 'red'}}>Password mismatched</span>}
                
                {errMsg && <p style={{color: 'red'}}>{errMsg}</p>}
                <Button onClick={handleSubmit(onSubmit)} style={{backgroundColor: 'salmon', margin: '30px 0 10px'}} fullWidth variant="contained">Create an account</Button>
                <p>Already have an account? <span onClick={()=> setIsNew(false)} className='color-span'>Login</span>.</p>
           </form>
        </div>
    )
}

export default Signup
