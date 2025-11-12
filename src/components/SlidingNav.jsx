import '../styles/SlidingNav.css';
import { useState } from 'react';

function SlidingNav({close}) {

    return (
        <div className="sideNav" id="mySideNav">
            <a href="#" className="closebtn" onClick={close}>X</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    )
}

export default SlidingNav; 