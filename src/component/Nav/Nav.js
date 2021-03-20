import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import './nav.css'

function Nav() {
  const [loggedUser, setLoggedUser]= useContext(UserContext)
    return (
        <nav>
        <div className='nav-logo'>
          <Link to='/' style={{textDecoration:'none', color: 'black'}}><h2>Let's Go</h2></Link>
        </div>
        <div className='nav-links'>
          <Link to='/'><span>Home</span></Link>
          <span>Destination</span>
          <span>Blog</span>
          <span>Contact</span>
          {loggedUser.email?
          <p style={{marginTop:'10px', fontSize:'20px', color: 'salmon'}}>{ loggedUser.displayName||loggedUser.name}</p>:
          <Link to='/login'><button>Login</button></Link>}
        </div>
      </nav>
    )
}

export default Nav
