import React,{useState,useEffect} from 'react';
import { FaBehance,FaDownload,FaFigma,FaGithub, FaLinkedin,FaPlus } from "react-icons/fa";
import hero from '../../assets/hero.png'
import './hero.css'

const Hero = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [commits, setCommits] = useState(0);

  const animateCount = (target, setter) => {
    let count = 0;
    const step = target / 500;
    const interval = setInterval(() => {
      count += step;
      setter(Math.floor(count));
      if (count >= target) {
        clearInterval(interval);
        setter(target);
      }
    }, 10);
  };

  useEffect(() => {
    animateCount(2, setExperience);
    animateCount(10, setProjects);
    animateCount(4, setTechnologies);
    animateCount(50, setCommits); // For "50+" you can animate it as 50 for simplicity
  }, []);

    return (
    
      
      <div className='main-content'>

      <div className='container'>
        <section>

        <h3>Software Developer</h3>
       <h1>Hello I’m<br/> <span className="name">EMMANUEL CYPRIAN</span></h1>
       <p className="description">
        A passionate developer with expertise in building responsive websites. <br />
        I create user-friendly solutions that help businesses thrive online. <br />
        I’m dedicated to delivering high-quality work and continuous learning.
       </p>
        <div className="buttons">
        <button className="download-cv">Download Cv <FaDownload/></button>
        <div className="social-icons">
          <a href="https://github.com/2cyprian"  target='_blank'>
         <FaGithub size={20} className='icon'/>
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-charles-b80032256/"  target='_blank'>
         <FaLinkedin size={20} className='icon'/>

          </a>
          
          <a href="https://www.figma.com/files/team/1357247009110147301/recents-and-sharing?fuid=1280415927729424822" target='_blank'><FaFigma size={20} className='icon'/></a>
       
        </div>
        </div>
        </section>
        
      <div className="profile-container">
      <div className="profile-image">
      <img src={hero} alt="Emmanuel Cyprian" />
    </div>
      </div>
      
    
      </div>
      <section className="stats">
      <div className="stat-item">
        <h2>{experience}</h2>
        <p>years of <br />experience</p>
      </div>
      <div className="stat-item">
        <h2>{projects}</h2>
        <p>projects <br />completed</p>
      </div>
      <div className="stat-item">
        <h2>{technologies}</h2>
        <p>technologies<br /> mastered</p>
      </div>
      <div className="stat-item">
        <h2>{commits}+</h2>
        <p>code <br />commits</p>
      </div>
    </section>
  

    
    
   
               
    </div>
        
    );
}

export default Hero;
