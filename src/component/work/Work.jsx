import React,{useState} from 'react'
import './work.css'
import project1 from '/projects/project1.jpg'
import project2 from '/projects/project2.jpg'
import project3 from '/projects/project3.jpg'
import project4 from '/projects/project4.jpg'








const projects = [ {
    id:1,
    title: 'Frontend Project',
    description: 'A responsive e-commerce website designed for selling and repairing laptops.',
    tech:'html5,Css, javaScript',
    image: project1
  },
  {
    id:2,
    title: 'Frontend Project',
    description: 'HappyFest is an event planning website that showcases event vendors and helps individuals plan their events effortlessly.',
    tech:'html5,Css, javaScript',
    image: project2
  },
  {
    id:3,
    title: 'Frontend Project',
    description: ' responsive website for a design agency, showcasing services, portfolios, and client testimonials to attract and engage customers. is an event planning website that showcases event vendors and helps individuals plan their events effortlessly.',
    tech:'JSX,Css, React',
    image: project3

  },
  {
    id:4,
    title: 'ChatBot Project',
    description: ' Simple  customer service chat bot That help user get answers quickly and direct.',
    tech:'JSX,Css, React,python',
    image: project4

  },
]

function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const showNext = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const showPrev = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="pcontainer">
      <div className="pcard">
        <div className="description">
          <h2>{projects[currentIndex].title}</h2>
          <p>{projects[currentIndex].description}</p>
          <span>{projects[currentIndex].tech}</span>
          <hr />

        </div>
        <div className="image-container">
          <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
        </div>
      </div>
      <div className="navigation">
        <button onClick={showPrev}>&lt;</button>
        <button onClick={showNext}>&gt;</button>
      </div>
    </div>
  )
}

export default Work