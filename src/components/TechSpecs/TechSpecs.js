import React, { useState } from 'react';
import './TechSpecs.css'
import lamboTech from '../../assets/img/lamboTech.png'
import Select from '../Select/Select'
import SpecsCar from '../SpecsCar/SpecsCar'

const TechSpecs = () => {
    const [selectValue, setSelectValue] = useState("Engine");

    return (
        <div className='TechSpecs' >
            <h2 className='textoDecorativo'>FEATURES </h2>
            <img className='imgTech' src={lamboTech} alt="" data-aos="fade-left" data-aos-easing="linear"
                data-aos-duration="1200" />
            <div className='container-specs ' data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="1200">

                <div className='specs-item' >
                    <h3>Tech Specs</h3>
                    <Select setSelectValue={setSelectValue} />
                </div>
                <SpecsCar category={selectValue} />

            </div>


        </div>
    );
}

export default TechSpecs;