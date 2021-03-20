import React from 'react'
import './rideDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFlag, faMapMarkedAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router'
import data from '../../data/data.json';
import Map from '../Map/Map'
function RideDisplay({ride}) {
    const {from, to , date}= ride;
    const {name}= useParams();
    const times= [1,2,3];
    const [selected]= data.filter(item=> item.ride===name);
    console.log(selected);
    return (
        <div className="ride-display">
           <div className='ride-info'>
               <div className='ride-info-1'>
                  <p> <FontAwesomeIcon icon={faMapMarkedAlt}/> {from}</p>
                  <p><FontAwesomeIcon icon={faFlag}/> {to}</p>
                  <p><FontAwesomeIcon icon={faCalendarAlt}/> {date}</p>
               </div>
               {times.map(time=> {
                   return(
                    <div key={selected.id} className='ride-info-2'>
                    <img src={selected.image} alt=""/>
                    <span  style={{marginRight: '20px'}}>{selected.ride}</span>
                    <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    <span>4</span>
                    <span style={{marginLeft: '40px'}}>$50</span>
                    </div>  
                   )
               })}
               
           </div>
           <Map></Map>
        </div>
    )
}

export default RideDisplay
