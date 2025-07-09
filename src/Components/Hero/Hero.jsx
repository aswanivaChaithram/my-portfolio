import React from 'react'
import './Hero.css'
import profile from '../../assets/homeImg.jpg'
import resume from '../../assets/AswaniVAResume.pdf'
import TypeWriter from 'typewriter-effect'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='home' id='home'>
        <img src={profile} alt="" />
        <h1><span>I'm Aswani V A </span></h1>
        <h1 className="text">
          <span>
            <TypeWriter 
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Frontend Developer", "React Developer", "Fresher"]
              }}
            />
          </span>
        </h1>
        <p>I am a React developer from Kerala, India, skilled in HTML, CSS, JS and React.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact me</AnchorLink></div>
            <div className="hero-resume">
               <a 
                href={resume} 
                download 
                className="resume-link"
                title="Download my resume"
              >
                My resume <i className="fa-solid fa-download"></i>
              </a>
           </div>
        </div>
        <div className="social-media-accounts">
          <a href="https://github.com/aswanivaChaithram" target='_blank' title='check my GitHub'><i class="fa-brands fa-square-github"></i></a>
          <a href="https://www.linkedin.com/in/aswani-v-a-2a6773229/" target='_blank' title='Check my LinkedIn'><i class="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
  )
}

export default Hero