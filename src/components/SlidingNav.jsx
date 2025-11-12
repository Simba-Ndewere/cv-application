import '../styles/SlidingNav.css';
import { useState } from 'react';

function SlidingNav({widthValue, setWidth}) {

    return (
        <div className="sideNav" style={{width: widthValue}}>
            <a href="#" className="closebtn" onClick={() => setWidth('0%')}>x</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    )
}

export default SlidingNav; 