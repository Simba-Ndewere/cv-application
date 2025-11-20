import '../../styles/Skills.css'
import { useState } from 'react';
import delecteIcon from '../../assets/delete.png';

function Skills({ setSkills, skills }) {

    const [collapsible, openCollapsible] = useState(false);

    function handleSubmit(formData) {
    }

    return (
        <div className="general">
            <button type="button" className={`collapsibleSkills ${collapsible ? 'active' : ''}`} onClick={() => collapsible ? openCollapsible(false) : openCollapsible(true)}>Technical Skills</button>
            <div style={collapsible ? { display: "block" } : { display: "none" }} className='generalContainer'>
                <div className='createdSkills'>
                    {skills.map((skill) => {
                        return <div className='oneCreatedSkill skillIndividual' >
                            {skill}
                            <img src={delecteIcon}></img>
                        </div>
                    })}
                </div>
                <form className='form' action={handleSubmit}>
                    <div className='form-group'>
                        <label>
                            <input type='text' name="skill" placeholder="Skill" required />
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

export default Skills;