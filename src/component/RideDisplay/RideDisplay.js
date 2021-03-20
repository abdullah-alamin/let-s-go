import React from 'react'
import './rideDisplay.css'
import bike from '../../images/Frame.png'
import car from '../../images/Frame-2.png'
import bus from '../../images/Frame-1.png'
import train from '../../images/Group.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFlag, faMapMarkedAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router'

function RideDisplay({ride}) {
    const {from, to , date}= ride;
    const {name}= useParams();
    const transImgs= {
        bike: bike,
        car: car,
        bus: bus,
        train: train
    }
    return (
        <div className="ride-display">
           <div className='ride-info'>
               <div className='ride-info-1'>
                  <p> <FontAwesomeIcon icon={faMapMarkedAlt}/> {from}</p>
                  <p><FontAwesomeIcon icon={faFlag}/> {to}</p>
                  <p><FontAwesomeIcon icon={faCalendarAlt}/> {date}</p>
               </div>
               {}
               <div className='ride-info-2'>
                   <img src={transImgs[name]} alt=""/>
                   <span  style={{marginRight: '20px'}}>{name}</span>
                   <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                   <span>4</span>
                   <span style={{marginLeft: '60px'}}>$50</span>
               </div>
           </div>
           <div className='booking-map'>salam</div>
        </div>
    )
}

export default RideDisplay
