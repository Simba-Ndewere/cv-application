import { useState } from "react";
import '../../styles/WorkExperience.css'
import deleteIcon from '../../assets/delete.png'

function WorkExperience({ workExperience, setWorkExperience }) {

    const [collapsible, openCollapsible] = useState(false);

    function handleSubmit(formData) {
    }

    return (
        <div className='general'>
            <button type="button" className={`collapsibleExperience ${collapsible ? 'active' : ''}`} onClick={() => collapsible ? openCollapsible(false) : openCollapsible(true)}>Work Experience</button>
            <div style={collapsible ? { display: "block" } : { display: "none" }} className='generalContainer'>
                    {
                        workExperience.map((experience) => {
                            return <div className="enteredExperience">
                                <p className="titleExpe">{experience.title} - </p>
                                <p className="companyExpe">{experience.company}</p>
                                <div className="deleteExpe">
                                    <img src={deleteIcon} img />
                                </div>
                            </div>
                        })
                    }
                <form className='form' action={handleSubmit}>
                    <div className='form-group'>
                        <label>
                            <input type='text' name="title" placeholder="Title" required />
                        </label>
                        <label>
                            <input type='text' name="location" placeholder="Location" required />
                        </label>
                        <label>
                            <input type='text' name="company" placeholder="Company" required />
                        </label>
                        <div className="year">
                            <label for="yearStarted">From</label>
                            <input type="date" name="yearStarted"></input>
                        </div>
                        <div className="year">
                            <label for="yearEnd">To</label>
                            <input type="date" name="yearEnded"></input>
                        </div>
                        <label>
                            <textarea className="tasks" name="experienceTasks" placeholder="Tasks" required></textarea>
                        </label>
                        <button type="submit" className='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WorkExperience;