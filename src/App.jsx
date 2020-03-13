import React from 'react'

import Navbar from './components/Navbar'

import Home from './views/Home'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <div className='container'>

        <Home />
      </div>
    </div>
  )

}

export default App
