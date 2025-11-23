import { useState } from "react";
import deleteIcon from '../../assets/delete.png'

function Education({ education, setEducation }) {
    const [collapsible, openCollapsible] = useState(false);

    const [clickedEducationId, setEducationId] = useState('');
    const [clickedEdu, setClickedEdu] = useState(false);

    const [degree, setDegree] = useState('');
    const [university, setUniversity] = useState('');
    const [yearStart, setYearStarted] = useState('');
    const [yearEnded, setYearEnded] = useState('');

    function handleSubmit(formData) {

        console.log("education:" + education);
        const degree = formData.get("degree").toString();
        const university = formData.get("university").toString();
        const yearStart = formData.get("yearStarted").toString()
        let yearEnd = formData.get("yearEnded").toString();

        yearEnd = yearEnd === '' ? 'present' : yearEnd;

        if (clickedEdu) {
            const newEducation = education.map((edu) => {
                if (edu.id === clickedEducationId) {
                    return {
                        degree: degree,
                        university: university,
                        to: yearEnd,
                        from: yearStart
                    }
                } else {
                    return edu;
                }
            });
            setEducation(newEducation);
        } else {
            setEducation([
                ...education,
                {
                    degree: degree,
                    university: university,
                    id: crypto.randomUUID(),
                    from: yearStart,
                    to: yearEnd,
                }
            ]);
        }
        setDegree("");
        setUniversity("");
        setYearEnded("");
        setYearStarted("");
        setClickedEdu(false);
    }

    function populateForm(educationID) {
        education.forEach((edu) => {
            if (edu.id == educationID) {
                setDegree(edu.degree);
                setUniversity(edu.university);
                setYearStarted(edu.from);
                setYearEnded(edu.to);
                setEducationId(educationID);
                setClickedEdu(true);
            }
        })
    }

    return (
        <div className='general'>
            <button type="button" className={`collapsibleEducation ${collapsible ? 'active' : ''}`} onClick={() => collapsible ? openCollapsible(false) : openCollapsible(true)}>Education</button>
            <div style={collapsible ? { display: "block" } : { display: "none" }} className='generalContainer'>
                {education.map((singleEducation) => {
                    return <div key={singleEducation.id} className="educationShown">
                        <p className="educationTitle" onClick={() => populateForm(singleEducation.id)}>{singleEducation.degree.toUpperCase()}</p>
                        <div className="deleteExpe">
                            <img src={deleteIcon} onClick={() => {
                                setEducation(
                                    education.filter(educationClicked =>
                                        educationClicked.id !== singleEducation.id
                                    )
                                )
                            }}></img>
                        </div>
                    </div>
                })}
                <form className='form' action={handleSubmit}>
                    <div className='form-group'>
                        <label>
                            <input value={degree} onChange={e => setDegree(e.target.value)} type='text' name="degree" placeholder="Degree" required />
                        </label>
                        <label>
                            <input value={university} onChange={e => setUniversity(e.target.value)} type='text' name="university" placeholder="University" required />
                        </label>
                        <div className="year">
                            <label htmlFor="yearStarted">From</label>
                            <input value={yearStart} onChange={e => setYearStarted(e.target.value)} type="date" required name="yearStarted"></input>
                        </div>
                        <div className="year">
                            <label htmlFor="yearEnd">To</label>
                            <input value={yearEnded} onChange={e => setYearEnded(e.target.value)} type="date" name="yearEnded"></input>
                        </div>
                        <button type="submit" className='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Education;