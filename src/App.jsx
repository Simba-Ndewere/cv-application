import { useState, useEffect } from 'react';
import './styles/App.css'
import navImg from './assets/list.png'
import InputForm from './components/input/InputForm.jsx'
import GeneralInformationCV from './components/output/GeneralInformationCV.jsx'
import SkillsCV from './components/output/SkillsCV.jsx';
import WorkExperienceCV from './components/output/WorkExperienceCV.jsx';

function App() {

  const [navWidth, setNavWidth] = useState('0%');
  const [generalInformation, setGeneralInfo] = useState({ fullName: 'John Doe', email: 'johndoe@gmail.com', phoneNumber: '012456890', address: 'london', personalStatement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' });
  const [skills, setSkills] = useState([{ name: 'react', id: crypto.randomUUID() }, { name: 'nextjs', id: crypto.randomUUID() }, { name: 'springboot', id: crypto.randomUUID() }, { name: 'javascript', id: crypto.randomUUID() }, { name: 'java', id: crypto.randomUUID() }, { name: 'nodejs', id: crypto.randomUUID() }, { name: 'typescript', id: crypto.randomUUID() }]);
  const [workExperience, setWorkExperience] = useState([{
    title: 'Senior Software Engineer', company: 'Google', id: crypto.randomUUID(), location: 'London', from: '2025-07-01', to: 'present', tasks: `• Lead the design, development, and deployment of high-performance, low-latency applications used across trading, payments, or risk platforms.
• Collaborate with cross-functional teams (product, architecture, quant, cybersecurity, DevOps) to deliver scalable enterprise solutions that meet strict regulatory and security standards.
• Mentor junior and mid-level engineers, conduct code reviews, and enforce best practices in software engineering, testing, and system reliability.
• Drive continuous improvement by identifying technical debt, implementing architectural enhancements, and adopting modern engineering tools and frameworks.
• Ensure system resilience and quality through automated testing, monitoring, performance tuning, and participating in on-call rotations for critical production systems.
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
        </div>

      </div>
    </>
  )
}

export default App
