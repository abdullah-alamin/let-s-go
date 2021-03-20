import React from 'react'
import map from '../../images/Map.png'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Map() {
    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: 41.3851, lng: 2.1734
      }
      
    return (
        <div className='booking-map'>
            <img src={map} alt=""/>
            {/* <LoadScript
                googleMapsApiKey='YOUR_API_KEY_HERE'> ----I couldn't manage the api key----
                <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
                />
            </LoadScript> */}
        </div>
    )
}

export default Map
​
const MapContainer = () => {
  
 
  return (
     
  )
}
​
export default MapContainer;