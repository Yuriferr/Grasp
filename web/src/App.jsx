import { useState } from 'react'
import './App.scss'

import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
