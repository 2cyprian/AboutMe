import './App.css'
import Contact from './component/contact/Contact'
import Hero from './component/home/Hero'
import NavBar from './component/home/NavBar'
import Resume from './component/resume/Resume'
import Services from './component/services/Services'
import Work from './component/work/Work'

function App() {
  

  return (
    <>
     <NavBar/>
     <Hero/>
     <Services/>
     <Resume/>
     <Work/>
     <Contact/>

    </>
  )
}

export default App
