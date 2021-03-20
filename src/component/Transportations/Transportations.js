import React from 'react'
import './trans.css'
import bike from '../../images/Frame.png'
import car from '../../images/Frame-2.png'
import bus from '../../images/Frame-1.png'
import train from '../../images/Group.png'
import { Link } from 'react-router-dom'

function Transportations() {
    const style= {textDecoration: 'none'}
    return (
        <div className='trans-wrapper'>
            <div className='transportations'>
              <Link style={style} to='/transport/bike'>
              <div><img src={bike} alt=""/> <h3>Bike</h3> </div>
              </Link>  
              <Link style={style} to='/transport/car'>
              <div><img src={car} alt=""/><h3>Car</h3></div>
              </Link>  
              <Link style={style} to='/transport/bus'>
              <div><img src={bus} alt=""/><h3>Bus</h3></div>
              </Link> 
              <Link style={style} to='/transport/train'>
              <div><img src={train} alt=""/><h3>Train</h3></div>
              </Link> 
            </div>
        </div>
        
    )
}

export default Transportations
