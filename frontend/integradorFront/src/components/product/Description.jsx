import React from 'react'


const Description = ({ productById }) => {
    return (
        <div className='container-description'>
            <h2 className='container-description__title'>{productById.descriptionTitle}</h2>
            <p className='container-description__content'>{productById.description}</p>
        </div>
    )
}

export default Description