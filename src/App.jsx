import { useState } from 'react'
import './styles/App.css'
import navImg from './assets/list.png'
import SlidingNav from './components/input/SlidingNav.jsx'
import GeneralInformationCV from './components/output/GeneralInformationCV.jsx'

function App() {

  const [navWidth, setNavWidth] = useState('0%');

  return (
    <div className="container">

      <div className="nav-bar">
        <div className='nav-img'>
          <img src={navImg} alt='nav bar icon' onClick={() => setNavWidth('100%')}></img>
        </div>
        <SlidingNav
          widthValue={navWidth}
          setWidth={setNavWidth} />
        <h2>CV GENERATOR</h2>
      </div>

      <div className='generalInformation'>
        <GeneralInformationCV />
      </div>
    </div>
  )
}

export default App
