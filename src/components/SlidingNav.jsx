import '../styles/SlidingNav.css';
import { useState } from 'react';

function SlidingNav({ widthValue, setWidth }) {

    return (
        <div className="navContainer">
            <div className="sideNav" style={{ width: widthValue }}>
                <a href="#" className="closebtn" onClick={() => setWidth('0%')}>x</a>
            </div>
        </div>
    )
}

export default SlidingNav; 