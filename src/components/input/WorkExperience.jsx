import { useState } from "react";
import '../../styles/WorkExperience.css'
import deleteIcon from '../../assets/delete.png'

function WorkExperience({ workExperience, setWorkExperience }) {

    const [collapsible, openCollapsible] = useState(false);
    const [clickedExperienceId, setWorkExperienceId] = useState('');
    const [clickedExpe, setClickedExpe] = useState(false);

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');
    const [yearStart, setYearStarted] = useState('');
    const [yearEnded, setYearEnded] = useState('');
    const [tasks, setTasks] = useState('');

    function handleSubmit(formData) {

        const title = formData.get("title").toString();
        const location = formData.get("location").toString();
        const company = formData.get("company").toString();
        const yearStart = formData.get("yearStarted").toString()
        let yearEnd = formData.get("yearEnded").toString();
        const tasks = formData.get("experienceTasks").toString();

        yearEnd = yearEnd === '' ? 'present' : yearEnd;

        if (clickedExpe) {
            const newWorkExperience = workExperience.map((experience) => {
                if (experience.id === clickedExperienceId) {
                    return {
                        title: title,
                        company: company,
                        id: experience.id,
                        location: location,
                        from: yearStart,
                        to: yearEnd,
                        tasks: tasks
                    }
                } else {
                    return experience;
                }
            });
            setWorkExperience(newWorkExperience);
        } else {
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
        setCompany("");
        setTitle("");
        setLocation("");
        setTasks("");
        setYearEnded("");
        setYearStarted("");
        setClickedExpe(false);
    }

    function populateForm(experienceID) {
        workExperience.forEach((experience) => {
            if (experience.id == experienceID) {
                setCompany(experience.company);
                setTitle(experience.title);
                setLocation(experience.location);
                setTasks(experience.tasks);
                setYearStarted(experience.from);
                setYearEnded(experience.to);
                setWorkExperienceId(experienceID);
                setClickedExpe(true);
            }
        })
    }

    return (
        <div className='general'>
            <button type="button" className={`collapsibleExperience ${collapsible ? 'active' : ''}`} onClick={() => collapsible ? openCollapsible(false) : openCollapsible(true)}>Work Experience</button>
            <div style={collapsible ? { display: "block" } : { display: "none" }} className='generalContainer'>
                {
                    workExperience.map((experience) => {
                        return <div key={experience.id} className="enteredExperience">
                            <p className="titleExpe" onClick={() => populateForm(experience.id)}>{experience.title} - </p>
                            <p className="companyExpe">{experience.company}</p>
                            <div className="deleteExpe">
                                <img src={deleteIcon} onClick={() => {
                                    setWorkExperience(
                                        workExperience.filter(experienceEntered =>
                                            experience.id !== experienceEntered.id
                                        )
                                    )
                                }}></img>
                            </div>
                        </div>
                    })
                }
                <form className='form' action={handleSubmit}>
                    <div className='form-group'>
                        <label>
                            <input value={title} onChange={e => setTitle(e.target.value)} type='text' name="title" placeholder="Title" required />
                        </label>
                        <label>
                            <input value={location} onChange={e => setLocation(e.target.value)} type='text' name="location" placeholder="Location" required />
                        </label>
                        <label>
                            <input value={company} onChange={e => setCompany(e.target.value)} type='text' name="company" placeholder="Company" required />
                        </label>
                        <div className="year">
                            <label htmlFor="yearStarted">From</label>
                            <input value={yearStart} onChange={e => setYearStarted(e.target.value)} type="date" required name="yearStarted"></input>
                        </div>
                        <div className="year">
                            <label htmlFor="yearEnd">To</label>
                            <input value={yearEnded} onChange={e => setYearEnded(e.target.value)} type="date" name="yearEnded"></input>
                        </div>
                        <label>
                            <textarea value={tasks} onChange={e => setTasks(e.target.value)} className="tasksInput" name="experienceTasks" placeholder="Tasks" required></textarea>
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