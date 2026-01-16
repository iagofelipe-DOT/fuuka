import { useState } from 'react'
import './index.css'
import Bubbles from './bubbles/Bubbles.jsx'
import LowerBubbles from './bubbles/LowerBubbles.jsx'

function App() {

  return (
    <div className='body'>
      <Bubbles/>
      <LowerBubbles/>
    </div>
  )
}

export default App
