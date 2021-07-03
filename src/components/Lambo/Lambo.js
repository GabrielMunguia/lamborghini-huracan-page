import React from 'react'
import './Lambo.css'
import lamboEnd from '../../assets/img/lamboEnd.png'

const Lambo3D = () => {
    return (
        <div className='lamboEnd' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"    >
            <div className='lamboEnd_data'>
                <div>
                    <p><span>325</span>TOP SPEED </p>
                </div>
                <div>
                    <p><span>7</span> GEARS BOX</p>
                </div>
                <div>
                    <p><span>2.9</span>ACELETRATION </p>
                </div>
            </div>

            <div className='lamboEnd_data_extra'>
                <span>Kmph</span>
                <span>gears</span>
                <span>seconds</span>
            </div>

            <img className='lamboEndImg' src={lamboEnd} alt="" />

        </div>
    )
}

export default Lambo3D
