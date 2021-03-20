import React from 'react'
import './trans.css'
import { Link } from 'react-router-dom'
import data from '../../data/data.json'
function Transportations() {
    const style= {textDecoration: 'none'};
    console.log(data);
    return (
        <div className='trans-wrapper'>
            <div className='transportations'>
                {data.map(ride=> {
                    return(
                        <div key={ride.id}>
                      <Link style={style} to={'/transport/'+ride.ride}>
                      {/* <div> */}
                          <img src={ride.image} alt=""/>
                          <h3>{ride.ride}</h3>
                        {/* </div> */}
                      </Link>
                      </div>   
                    )
                })}
            </div>
        </div>
        
    )
}

export default Transportations
