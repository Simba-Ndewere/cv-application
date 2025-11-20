import { useState, useEffect } from 'react';
import './styles/App.css'
import navImg from './assets/list.png'
import SlidingNav from './components/input/SlidingNav.jsx'
import GeneralInformationCV from './components/output/GeneralInformationCV.jsx'
import SkillsCV from './components/output/SkillsCV.jsx';
import WorkExperienceCV from './components/output/WorkExperienceCV.jsx';

function App() {

  const [navWidth, setNavWidth] = useState('0%');
  const [generalInformation, setGeneralInfo] = useState({ fullName: 'John Doe', email: 'johndoe@gmail.com', phoneNumber: '012456890', address: 'harrogate', personalStatement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' });
  const [skills, setSkills] = useState([{ name: 'react', id: crypto.randomUUID() }, { name: 'nextjs', id: crypto.randomUUID() }, { name: 'springboot', id: crypto.randomUUID() }, { name: 'javascript', id: crypto.randomUUID() }, { name: 'java', id: crypto.randomUUID() }, { name: 'nodejs', id: crypto.randomUUID() }, { name: 'typescript', id: crypto.randomUUID() }]);

  return (
    <>
      <h2 className="desktop">GENERATE CV</h2>
      <div className="container">
        <div className="nav-bar">
          <div className='nav-img'>
            <img src={navImg} alt='nav bar icon' onClick={() => setNavWidth('100%')}></img>
          </div>
          <SlidingNav
            widthValue={navWidth}
            setWidth={setNavWidth}
            setGeneralInfo={setGeneralInfo}
            setSkills={setSkills}
            skills={skills}
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
          <WorkExperienceCV/>
        </div>

      </div>
    </>
  )
}

export default App
