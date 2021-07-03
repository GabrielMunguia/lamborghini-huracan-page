import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <ul className='navLista'>
                <li><a href="/#">Garage</a></li>
                <li>   <a href="/#">About</a> </li>
                <li className='StartNow'> <a href="/#">Start Now!</a> </li>
            </ul>
        </nav>
    );
}

export default Navbar;