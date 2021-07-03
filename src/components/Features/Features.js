import React from 'react';
import './Features.css'
import speed from '../../assets/img/speed.svg'
import rayo from '../../assets/img/rayo.svg'
import lamboIcono from '../../assets/img/lamboIcono.svg'
const Features = () => {
    return (

        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200" className='containerFeatures' >
            <div className='text-Features ' >
                <h3>Take a journey, <br /> bend space </h3>
                <p>The Lamborghini Huracán is the ideal compromise <wbr />  between technology.
                    The first emotion is felt just<wbr />   by looking at it.  Sharp, aerodynamic lines
                    to counter the air and tame the road. <wbr />  The second is experienced by touching it.<wbr />
                    The best Italian craftsmanship skills<wbr />   are employed to produce <wbr />  prestigious finishes
                    and unprecedented quality. </p>


            </div>
            <div className='qualities'>
                <div>
                    <img src={lamboIcono} alt="" />
                    <div>
                        <h3>AGILITY</h3>
                        <p>Built for speed ,with a <br />  5.2-litter V10 engine </p>
                    </div>

                </div>
                <div>
                    <img src={speed} alt="" />
                    <div>
                        <h3>PERFORMANCE</h3>
                        <p>Accelerating from zero to <br />  60 mph in 2.8s </p>
                    </div>

                </div>
                <div>
                    <img src={rayo} alt="" />
                    <div>
                        <h3>CUTTING EDGE</h3>
                        <p>Sharing nearing half its parts<br />  </p>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Features;