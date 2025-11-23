function WorkExperienceCV({ workExperience }) {
    return (
        <div className="generalContainerCV">
            <p className="titleCV">Work Experience</p>
            {workExperience.map((experience) => {
                return <>
                    <div className="titleLocation">
                        <p className="titlePosition">{experience.title},</p>
                        <p className="location">{experience.location}</p>
                    </div>
                    <div className="companyDate">
                        <p className="company">{experience.company},</p>
                        <p className="date">{experience.from} - {experience.to}</p>
                    </div>
                    <div className="tasks">
                        {experience.tasks}
                    </div>
                </>
            })}
        </div>
    )
}

export default WorkExperienceCV;