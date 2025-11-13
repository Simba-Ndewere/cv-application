import '../styles/SlidingNav.css';
import { useState } from 'react';
import closeImg from '../assets/close.png'

function SlidingNav({ widthValue, setWidth }) {

    return (
        <div className="navContainer">
            <div className="sideNav" style={{ width: widthValue }}>
                <img src={closeImg} className="closebtn" alt='close nav icon' onClick={() => setWidth('0%')}></img>
            </div>
        </div>
    )
}

export default SlidingNav; 