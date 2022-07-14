import React from 'react'
import "styles/product/locationMap.css";

const LocationMap = () => {
  return (
    <div className='container-location-map'>
        <h2 className='h2-location-map'>¿Dónde vas a estar?</h2>
        <h3 className='h3-location-map'>Buenos Aires, Argentina</h3>
        <div className='location-map-container'>
            <div className='location-map'>
                {/* MAP */}
            </div>
        </div>
    </div>
  )
}

export default LocationMap