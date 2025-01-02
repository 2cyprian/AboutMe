import React from 'react'
import './services.css'

function Services() {
  return (
    <div className="container">
    <div className="services">
      <div className="service">
        <span className="number">01</span>
        <h3 className='title'>Web Development</h3>
        <p id="text1">
          Build fast, responsive, and user-friendly websites tailored to meet your business needs.
          From static sites to dynamic web applications, we ensure seamless functionality,
          modern design, and optimized performance.
        </p>
        
      </div>
      <div className="service ">
        <span className="num">02</span>
        <h3>UI /UX DESIGN</h3>
        <p id="text1">
        create intuitive and visually appealing designs that
 enhance user experiences. Our focus is on usability,
 accessibility, and seamless navigation to deliver
 products that engage users and drive results.
        </p>
        
      </div>
      <div className="service">
        <span className="num">03</span>
        <h3>AI CHATBOTS</h3>
        <p id="text1">
        develop intelligent AI chatbots to automate customer
 interactions, enhance support, and improve engagement. 
Our chatbots are designed to deliver quick, personalized
, and efficient responses, ensuring a seamless user experience.
        </p>
              </div>
      <div className="service">
        <span className="num">04</span>
        <h3>Technical Support</h3>
        <p id="text1">
        Provide reliable technical support services
, including troubleshooting, system maintenance, and 
hardware repairs. Our goal is to ensure smooth operations
 and minimize downtime for your business.
        </p>
              </div>
      
    </div>
    
  </div>
  )
}

export default Services