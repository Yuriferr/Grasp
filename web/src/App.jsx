import { useState } from 'react'
import './App.scss'

import Header from './components/Header/index'
import Main from './components/Main/index'
import About from './components/About/index'
import Works from './components/Works/index'
import Contact from './components/Contact/index'
import Footer from './components/Footer/index'

function App() {

  return (
    <div className='App'>
      <Header/>

      <Main/>

      <About/>

      <Works/>

      <Contact/>

      <Footer/>
    </div>
  )
}

export default App
