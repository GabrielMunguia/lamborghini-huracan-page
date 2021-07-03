import React from 'react'
import './SpecsCar.css'
import PropTypes from 'prop-types';
import Infocar from '../InfoCar/InfoCar.js'
export default function SpecsCar({ category }) {


    return (
        <div className='specs'>
            <Infocar category={category} />
        </div>
    )
}


SpecsCar.propTypes = {
    category: PropTypes.string.isRequired,
}