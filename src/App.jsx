import { useState, useEffect } from 'react';
import './styles/App.css'
import navImg from './assets/list.png'
import InputForm from './components/input/InputForm.jsx'
import GeneralInformationCV from './components/output/GeneralInformationCV.jsx'
import SkillsCV from './components/output/SkillsCV.jsx';
import WorkExperienceCV from './components/output/WorkExperienceCV.jsx';
import EducationCV from './components/output/EducationCV.jsx';

function App() {

  const [navWidth, setNavWidth] = useState('0%');
  const [generalInformation, setGeneralInfo] = useState({ fullName: 'John Doe', email: 'johndoe@gmail.com', phoneNumber: '012456890', address: 'london', personalStatement: 'I am a skilled Software Engineer with extensive experience building scalable, secure, and enterprise-grade applications within the financial services industry. I have strong expertise in modern web technologies, backend systems, microservices, and cloud platforms, and I excel at designing reliable, high-performance solutions while delivering clean, maintainable code. I enjoy solving complex technical challenges, improving engineering processes, and driving architectural enhancements that boost system performance, security, and resilience. With a solid foundation in Java, Spring Boot, JavaScript/TypeScript, React, and modern DevOps practices, I bring a balanced full-stack perspective, a strong collaborative mindset, and a commitment to continuous learning and innovation' });
  const [skills, setSkills] = useState([{ name: 'react', id: crypto.randomUUID() }, { name: 'nextjs', id: crypto.randomUUID() }, { name: 'springboot', id: crypto.randomUUID() }, { name: 'javascript', id: crypto.randomUUID() }, { name: 'java', id: crypto.randomUUID() }, { name: 'nodejs', id: crypto.randomUUID() }, { name: 'typescript', id: crypto.randomUUID() }]);
  const [workExperience, setWorkExperience] = useState([{
    title: 'Senior Software Engineer', company: 'JP Morgan', id: crypto.randomUUID(), location: 'London', from: '2025-07-01', to: 'present', tasks: `• Lead the design, development, and deployment of high-performance, low-latency applications used across trading, payments, or risk platforms.
• Collaborate with cross-functional teams (product, architecture, quant, cybersecurity, DevOps) to deliver scalable enterprise solutions that meet strict regulatory and security standards.
• Mentor junior and mid-level engineers, conduct code reviews, and enforce best practices in software engineering, testing, and system reliability.
• Drive continuous improvement by identifying technical debt, implementing architectural enhancements, and adopting modern engineering tools and frameworks.
• Ensure system resilience and quality through automated testing, monitoring, performance tuning, and participating in on-call rotations for critical production systems.
`}, {
    title: 'Software Engineer', company: 'Barclays', id: crypto.randomUUID(), location: 'London', from: '2021-02-01', to: '2025-06-30', tasks: `• Design, build, and maintain scalable software applications using modern programming languages and frameworks, develop backend services, APIs, and microservices following clean architecture and industry best practices.
• Build and maintain front-end interfaces with technologies such as JavaScript, TypeScript, React, and HTML/CSS, collaborate with cross-functional teams including product owners, QA, DevOps, and architects to deliver features using Agile methodologies.
• Write high-quality, testable, and maintainable code, supported by unit, integration, and automated tests, participate in code reviews to ensure adherence to coding standards, performance, security, and maintainability.
• Implement secure coding practices and ensure all systems comply with security, audit, and regulatory requirements, identify technical debt, propose architectural improvements, and adopt modern engineering tools and practices.
• Work with distributed systems, messaging platforms, databases, and cloud technologies to support enterprise-scale solutions.
`}]);

  return (
    <>
      <h2 className="desktop">GENERATE CV</h2>
      <div className="container">
        <div className="nav-bar">
          <div className='nav-img'>
            <img src={navImg} alt='nav bar icon' onClick={() => setNavWidth('100%')}></img>
          </div>
          <InputForm
            widthValue={navWidth}
            setWidth={setNavWidth}
            setGeneralInfo={setGeneralInfo}
            setSkills={setSkills}
            skills={skills}
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
          />
          <h2 className="mobile">GENERATE CV</h2>
        </div>
        <div className='generalInformation'>
          <GeneralInformationCV
            generalInfo={generalInformation}
          />
          <SkillsCV
            defaultSkills={skills}
          />
          <WorkExperienceCV
            workExperience={workExperience}
          />
          <EducationCV
          />
        </div>

      </div>
    </>
  )
}

export default App
