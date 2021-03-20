import React, {useState} from 'react'
import Booking from '../Booking/Booking'
import RideDisplay from '../RideDisplay/RideDisplay'

function RideSetup() {
    const [ride, setRide]= useState({
        from: '',
        to: '',
        date:''
    })
    return (
        <>
        {ride.to===''?    
        <Booking ride={ride} setRide={setRide}></Booking>:
        <RideDisplay ride={ride}></RideDisplay>
        }
        </>
    )
}

export default RideSetup
