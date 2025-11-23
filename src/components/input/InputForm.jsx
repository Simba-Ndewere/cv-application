import '../../styles/InputForm.css';
import closeImg from '../../assets/close.png'
import GeneralInformation from './GeneralInformation';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import Education from './Education';

function InputForm({ widthValue, setWidth, setGeneralInfo, setSkills, skills, workExperience, setWorkExperience, education, setEducation, generalInfo }) {

    return (
        <div className="navContainer">
            <div className="sideNav" style={{ width: widthValue }}>
                <img src={closeImg} className="closebtn" alt='close nav icon' onClick={() => setWidth('0%')}></img>
                <GeneralInformation
                    setGeneralInfo={setGeneralInfo}
                    generalInfo={generalInfo} />
                <Skills
                    setSkills={setSkills}
                    skills={skills} />
                <WorkExperience
                    workExperience={workExperience}
                    setWorkExperience={setWorkExperience} />
                <Education
                    education={education}
                    setEducation={setEducation}
                />
            </div>
        </div>
    )
}

export default InputForm; 