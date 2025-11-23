import { useState } from "react";

function Education() {
    const [collapsible, openCollapsible] = useState(false);

    function handleSubmit() {

    }

    return (
       <div className='general'>
            <button type="button" className={`collapsibleEducation ${collapsible ? 'active' : ''}`} onClick={() => collapsible ? openCollapsible(false) : openCollapsible(true)}>Education</button>
            <div style={collapsible ? { display: "block" } : { display: "none" }} className='generalContainer'>
                <form className='form' action={handleSubmit}>
                    <div className='form-group'>
                        <label>
                            <input type='text' name="fullname" placeholder="Degree" required />
                        </label>
                        <label>
                            <input type='email' name="email" placeholder="University" required />
                        </label>
                        <div className="year">
                            <label htmlFor="yearStarted">From</label>
                            <input type="date" required name="yearStarted"></input>
                        </div>
                        <div className="year">
                            <label htmlFor="yearEnd">To</label>
                            <input type="date" name="yearEnded"></input>
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