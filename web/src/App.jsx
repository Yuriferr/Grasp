import { useState } from 'react'
import './App.scss'

import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'

function App() {

  return (
    <div className='App'>
      <Header/>

      <Main/>

      <About/>
    </div>
  )
}

export default App
