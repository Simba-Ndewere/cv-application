import '../../styles/EducationCV.css'
function Education({ education }) {
    return (
        <div className="generalContainerCV">
            <div>
                <p className='titleCV'>Education</p>
                {education.map((singleEducation) => {
                    return <div key={singleEducation.id}>
                        <p className='degree'>{singleEducation.degree.toUpperCase()}</p>
                        <div className="uniYear">
                            <p>{singleEducation.university}, </p>
                            <p>{singleEducation.from} to {singleEducation.to}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Education;