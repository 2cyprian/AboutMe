import React,{useState} from 'react'
import './contact.css'
import { FaMailBulk, FaPhone, FaVoicemail } from 'react-icons/fa';
import { FaLocationDot, FaMapLocation } from 'react-icons/fa6';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service1: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      return (
        <div className="form-container">
          <form className="form-section" onSubmit={handleSubmit}>
            <h1>Let's work together</h1>
            <input type="text" name="firstName" placeholder="Firstname" value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Lastname" value={formData.lastName} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
            <select name="service1" value={formData.service1} onChange={handleChange}>
              <option value="">Select a Service</option>
              <option value="web-development">Web Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="chatbot">Chatbot</option>
              <option value="technical-support">Technical Support</option>
            </select>
           
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
            <button className="btn" type="submit">Send Message</button>
          </form>
          <div className="contact-section">
            <div className="contact-info">
              <FaPhone color='var(--text-color)' size={30} className='icon'/>
              <div>
                <p>(+255) 775 727 872</p>
                <p>(+255) 612 679 662</p>
              </div>
            </div>
            <div className="contact-info">
            <FaMailBulk color='var(--text-color)' size={30} className='icon'/>

              <p>emmanuelcyprian268@gmail.com</p>
            </div>
            <div className="contact-info">
            <FaMapLocation color='var(--text-color)' size={30} className='icon'/>
             
              <p>Tanzania (Dar es salaam)</p>
            </div>
          </div>
        </div>
      );
    };