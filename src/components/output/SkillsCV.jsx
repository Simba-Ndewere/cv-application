import '../../styles/SkillsCV.css'

function SkillsCV({ defaultSkills }) {
    return (
        <div className="generalContainerCV">
            <div>
                <p className='titleCV'>Technical Skills</p>
                <div className='skillsCVContainer'>
                    {defaultSkills.map((skill) => {
                        return <div key={skill.id} className='skillIndividual'>
                            {skill.name}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default SkillsCV;