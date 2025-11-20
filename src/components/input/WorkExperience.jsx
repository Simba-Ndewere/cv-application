import { useState } from "react";
import '../../styles/WorkExperience.css'
function WorkExperience() {

    const [collapsible, openCollapsible] = useState(false);

    function handleSubmit(formData) {
    }

    return (
        <div className='general'>
            <button type="button" className={`collapsibleExperience ${collapsible ? 'active' : ''}`} onClick={() => collapsible ? openCollapsible(false) : openCollapsible(true)}>Work Experience</button>
            <div style={collapsible ? { display: "block" } : { display: "none" }} className='generalContainer'>
                <form className='form' action={handleSubmit}>
                    <div className='form-group'>
                        <label>
                            <input type='text' name="fullname" placeholder="Enter Work Experience" required />
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