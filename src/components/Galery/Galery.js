import React from 'react'
import './Galery.css'
import fuego from '../../assets/img/fuego.svg'
import agua from '../../assets/img/agua.svg'
import lamboNieve from '../../assets/img/lambo-nieve2.jpg'
const Galery = () => {
    return (
        <div className='galery' >
            <div className='galery-3d ' data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="1200">
                <div >Power and speed <br /> unleashed  <img className='galery-icon' src={fuego} alt="" />  </div>
                <div ></div>
                <div></div>
                <div>Resoectful to <br /> enviroment <img className='galery-icon' src={agua} alt="" />  </div>
            </div>

            <div data-aos="fade-left" data-aos-easing="linear"
                data-aos-duration="1200">
                <img src={lamboNieve} alt="" />


            </div>





        </div>
    )
}

export default Galery
