import '../../styles/SlidingNav.css';
import { useState } from 'react';
import closeImg from '../../assets/close.png'
import GeneralInformation from './GeneralInformation';
import EducationalExperience from './EducationalExperience';

function SlidingNav({ widthValue, setWidth, setGeneralInfo }) {

    return (
        <div className="navContainer">
            <div className="sideNav" style={{ width: widthValue }}>
                <img src={closeImg} className="closebtn" alt='close nav icon' onClick={() => setWidth('0%')}></img>
                <GeneralInformation 
                    setGeneralInfo={setGeneralInfo}/>
            </div>
        </div>
    )
}

export default SlidingNav; 