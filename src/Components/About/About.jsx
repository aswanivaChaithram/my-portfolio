import React from 'react'
import './About.css'
import about_profile from '../../assets/MyImg.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="title">
            <h1>About me</h1>
        </div> 
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-desc">
                    <p>I'm a passionate frontend developer with hands-on
                        experience in building responsive and user-friendly
                        web interfaces. As a fresher, I’m eager to collaborate
                        with reputable organizations where I can contribute my 
                        skills and grow professionally. My enthusiasm for frontend 
                        development
                        is reflected in the attention to detail and dedication I
                        bring to every project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML</p><hr style={{ width: "60%" }} /></div>
                    <div className="about-skill"><p>CSS</p><hr style={{ width: "60%" }} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                    <div className="about-skill"><p>React</p><hr style={{ width: "50%" }} /></div>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default About