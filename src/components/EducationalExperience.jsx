import { use } from 'react';
import { useState } from 'react';
import '../styles/GeneralInformation.css';

function EducationalExperience() {

    const [schoolName, setSchoolName] = useState('');
    const [qualification, setQualification] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');

    return (
        <div className='general'>
            <div className='generalContainer'>
                <h2>Educational Experience</h2>
                
            </div>
        </div>
    )
}

export default EducationalExperience;