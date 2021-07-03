import React from 'react';
import './Header.css'
import lambo from '../../assets/img/lambo.jpg'
import Navbar from '../Navbar/Navbar';
const Header = () => {
    return (
        <>
            <header >
                <Navbar />
                <img src={lambo} alt="" />
                <h1>Huracán </h1>
                <div className='texoHeader'>
                    <h2>Join The Journey</h2>
                    <p>Leaner and meaner than ever, the new Lamborghini Huracán  <br />
                        boldy goes where no car has gone before
                    </p>
                </div>

            </header>


        </>

    );
}

export default Header;