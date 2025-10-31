import { useState } from 'react'
import './App.css'
import navImg from './assets/list.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="nav-bar">
        <div className='nav-img'>
          <img src={navImg} alt='nav bar icon'></img>
        </div>
        <h2>CV GENERATOR</h2>
      </div>
    </div>
  )
}

export default App
