import '../../styles/SlidingNav.css';
import { useState } from 'react';
import closeImg from '../../assets/close.png'
import GeneralInformation from './GeneralInformation';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

function InputForm({ widthValue, setWidth, setGeneralInfo, setSkills, skills, workExperience, setWorkExperience }) {

    return (
        <div className="navContainer">
            <div className="sideNav" style={{ width: widthValue }}>
                <img src={closeImg} className="closebtn" alt='close nav icon' onClick={() => setWidth('0%')}></img>
                <GeneralInformation 
                    setGeneralInfo={setGeneralInfo}/>
                <Skills
                    setSkills={setSkills}
                    skills={skills}/>
                <WorkExperience
                    workExperience={workExperience}
                    setWorkExperience={setWorkExperience}
                />
            </div>
        </div>
    )
}

export default InputForm; 