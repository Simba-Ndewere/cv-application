import '../../styles/Skills.css'
import { useState } from 'react';

function Skills({ setSkills }) {

    const [collapsible, openCollapsible] = useState(false);
    
    function handleSubmit(formData) {
    }

    return (
        <div className="general">
            <button type="button" className={`collapsibleSkills ${collapsible ? 'active' : ''}`} onClick={() => collapsible ? openCollapsible(false) : openCollapsible(true)}>Skills</button>
            <div style={collapsible ? { display: "block" } : { display: "none" }} className='generalContainer'>
                <div className='createdSkills'>

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