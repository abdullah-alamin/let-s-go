import React, {useState} from 'react'
import './booking.css'
import {Button} from '@material-ui/core';
import map from '../../images/Map.png'
function Booking({ride, setRide}) {
    const [rideData, setRideData]= useState({
        from:'',
        to: '',
        date:''
    })
    const handleBlur= (e)=> {
        const newRideData= {...rideData, [e.target.name]:e.target.value}
        setRideData(newRideData);
    }
    const handleSubmit= ()=> {
        setRide(rideData);
    }
    return (
        <div className="booking">
           <div className='booking-info'>
               <form className='booking-form' onSubmit={(e)=> e.preventDefault()}>
                   <p>Pick from</p>
                   <input type="text" onBlur={handleBlur} name='from'/>
                   <p>Pick to</p>
                   <input type="text" onBlur={handleBlur} name="to"/>
                   <p>Date</p>
                   <input type="date" name='date' onBlur={handleBlur}/>
                   <Button onClick={handleSubmit} style={{backgroundColor: 'salmon', margin: '30px 0 10px'}} fullWidth variant="contained">Search</Button>
               </form>
           </div>
           <div className='booking-map'><img src={map} alt=""/></div>
        </div>
    )
}
export default Booking
