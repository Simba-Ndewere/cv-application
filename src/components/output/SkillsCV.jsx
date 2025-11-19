import '../../styles/SkillsCV.css'

function SkillsCV({ defaultSkills }) {
    return (
        <div className="generalContainerCV">
            <p className='titleCV'>Skills</p>
            <div className='skillsCVContainer'>
                {defaultSkills.map((skill) => {
                    return <div className='skillIndividual'>
                        {skill}
                    </div>
                })}
            </div>
        </div>

    )
}

export default SkillsCV;