import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from './FirebaseSetup';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
function EasyLogin() {
    const [loggedUser, setLoggedUser]= useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleFacebookSignin= ()=> {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        loginController(fbProvider);
    }
    const handleGoogleSignin= ()=> {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        loginController(googleProvider);   
    }
    const loginController= (provider)=> {
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            setLoggedUser(user);
            history.replace(from)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
           <div className="other-sign-ins">
               <div onClick={handleFacebookSignin} className="facebook">
                   <p><FontAwesomeIcon style={{color: '#4383e4', fontSize: '30px'}} icon={faFacebook}></FontAwesomeIcon></p>
                   <p>Continue with Facebook</p>
               </div>
               <div onClick={handleGoogleSignin} className="google">
                   <p><FontAwesomeIcon style={{color: 'rgb(99 199 36)', fontSize: '30px'}} icon={faGoogle}></FontAwesomeIcon></p>
                   <p>Continue with Google</p>
               </div>
           </div>
    )
}

export default EasyLogin
