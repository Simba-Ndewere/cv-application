import { useState } from 'react'
import './styles/App.css'
import navImg from './assets/list.png'
import SlidingNav from './components/SlidingNav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="nav-bar">
        <div className='nav-img'>
          <img src={navImg} alt='nav bar icon' onClick={SlidingNav}></img>
        </div>
        <h2>CV GENERATOR</h2>
      </div>
    </div>
  )
}

export default App
