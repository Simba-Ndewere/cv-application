import { useState } from "react";
import '../../styles/WorkExperience.css'
import deleteIcon from '../../assets/delete.png'

function WorkExperience({ workExperience, setWorkExperience }) {

    const [collapsible, openCollapsible] = useState(false);

    function handleSubmit(formData) {
        const title = formData.get("title").toString();
        const location = formData.get("location").toString();
        const company = formData.get("company").toString();
        const yearStart = formData.get("yearStarted").toString().substring(0, 7);
        const yearEnd = formData.get("yearEnded").toString();
        const tasks = formData.get("experienceTasks").toString();

        yearEnd === '' ? 'present' : yearEnd.substring(0, 7);

        setWorkExperience([
            ...workExperience,
            {
                title: title,
                company: company,
                id: crypto.randomUUID(),
                location: location,
                from: yearStart,
                to: yearEnd,
                tasks: tasks
            }
        ]);
    }

    return (
        <div className='general'>
            <button type="button" className={`collapsibleExperience ${collapsible ? 'active' : ''}`} onClick={() => collapsible ? openCollapsible(false) : openCollapsible(true)}>Work Experience</button>
            <div style={collapsible ? { display: "block" } : { display: "none" }} className='generalContainer'>
                {
                    workExperience.map((experience) => {
                        return <div key={experience.id} className="enteredExperience">
                            <p className="titleExpe">{experience.title} - </p>
                            <p className="companyExpe">{experience.company}</p>
                            <div className="deleteExpe">
                                <img src={deleteIcon}></img>
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
                            <label htmlFor="yearStarted">From</label>
                            <input type="date" required name="yearStarted"></input>
                        </div>
                        <div className="year">
                            <label htmlFor="yearEnd">To</label>
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