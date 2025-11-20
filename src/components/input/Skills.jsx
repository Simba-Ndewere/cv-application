import '../../styles/Skills.css'
import { useState } from 'react';
import delecteIcon from '../../assets/delete.png';

function Skills({ setSkills, skills }) {
    
    const [collapsible, openCollapsible] = useState(false);

    function handleSubmit(formData) {
        const skillName = formData.get("skill").toString();
        setSkills([
            ...skills,
            {
                name: skillName,
                id: crypto.randomUUID()
            }
        ]);
    }

    return (
        <div className="general">
            <button type="button" className={`collapsibleSkills ${collapsible ? 'active' : ''}`} onClick={() => collapsible ? openCollapsible(false) : openCollapsible(true)}>Technical Skills</button>
            <div style={collapsible ? { display: "block" } : { display: "none" }} className='generalContainer'>
                <div className='createdSkills'>
                    {skills.map((skill) => {
                        return <div key={skill.id} className='oneCreatedSkill skillIndividual' >
                            {skill.name}
                            <img src={delecteIcon} onClick={() => {
                                setSkills(
                                    skills.filter(a =>
                                        a.id != skill.id
                                    )
                                )
                            }}></img>
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