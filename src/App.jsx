import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import Header from './Component/Header/Header'
import Projects from './Component/Projects/Projects'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Footer from './Component/Footer/Footer'
import Skills from './Component/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <Home/>
     <div className='Container'>
     <About/>
     <Title subtitle="Our Project" title="Explore More"/>
     <Projects/>
     <Title subtitle="Skills" title="Skill included this.. "/>
     <Skills/>
     <Title subtitle="Contact-us" title="Let connect with the world ! "/>
     <Contact/>
   


     <Footer/>
     </div>
    
    </>
  )
}

export default App
