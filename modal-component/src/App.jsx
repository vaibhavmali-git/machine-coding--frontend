import React, { useState } from 'react'
import Modal from './components/Modal'

const App = () => {
  const [isOpen, setIsOpen]=useState(false)

  return (
    <div className='app'>
      <button onClick={()=>setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
    </div>
  )
}

export default App