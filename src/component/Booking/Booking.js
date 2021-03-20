import React, {useState} from 'react'
import './booking.css'
import {Button} from '@material-ui/core';
import Map from '../Map/Map';
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
                   <p>Pick from*</p>
                   <input type="text" onBlur={handleBlur} name='from' required/>
                   <p>Pick to*</p>
                   <input required type="text" onBlur={handleBlur} name="to"/>
                   <p>Date*</p>
                   <input type="date" name='date' onBlur={handleBlur} required/>
                   <Button onClick={handleSubmit} style={{backgroundColor: 'salmon', margin: '30px 0 10px'}} fullWidth variant="contained">Search</Button>
               </form>
           </div>
           <Map></Map>
        </div>
    )
}
export default Booking
