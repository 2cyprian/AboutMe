import React,{useState,useEffect} from 'react'
import Exprience from './subresumes/Exprience'
import './resume.css'
import Education from './subresumes/Education';
import Skills from './subresumes/Skills'
import Aboutme from './subresumes/Aboutme';


function Resume() {

    const [activeSection, setActiveSection] = useState('experience');

   

  return (
<div className="container">
   {/* {left section} */}
    <div className="left-section">
        <h1>Why Hire Me ?</h1>
        <p>all-in on AI and want to fast-track your AI Automation</p>
        <div className="nav-links">
          <button onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</button>
          <button onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</button>
          <button onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
          <button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About Me</button>
        </div>
    </div>

    {/* {right section} */}
    <div className='right-section'>
        {activeSection === 'experience' && (
            <>
            <Exprience/>
            </>
        )}
        {activeSection ==='education' &&(
            <>
            <Education/>
            </>
        )}
        {
            activeSection === 'skills' && (
                <>
                <Skills/>
                </>
            )
        }
        {
            activeSection === 'about' && (
                <>
                <Aboutme/>
                </>
            )

        }

    </div>
    </div>
  )
}

export default Resume;