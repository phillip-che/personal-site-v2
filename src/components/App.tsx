import { useState } from 'react'
import '../styles/App.css'
import NavBar from './NavBar'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Home from './Home'
import Experience from './Experience'
import Footer from './Footer'
import Gallery from './Gallery'
import { Fade } from 'react-awesome-reveal'

function App() {
  const [section, setSection] = useState(0);
  return (
    <>
      <div className="app">
        JABDKSKDBH
        {/* <div className="left-container">
          <Intro />
          <NavBar 
          setSection={setSection}
          />
        </div>
        <Fade triggerOnce>
          <div className="section-container">
            {section === 0 && <Home />}
            {section === 1 && <About />}
            {section === 2 && <Experience />}
            {section === 3 && <Projects />}
            {section === 4 && <Gallery />}
          </div>
        </Fade>
        <Footer /> */}
        {/* <Analytics /> */}
      </div>    
    </>
  )
}

export default App
