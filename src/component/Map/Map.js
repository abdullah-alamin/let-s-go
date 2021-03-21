import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 25.211510,
  lng: 88.149277
};

function Map() {
   
    return (
        <div className='booking-map'>
            <LoadScript
              googleMapsApiKey="AIzaSyDaZnUw5YQGIFTvXNRSfbdk4XOnI6G4TPs" >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
               
              </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Map