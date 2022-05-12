import React from 'react'
import {FaAward} from 'react-icons/fa'
import {VscFolder} from 'react-icons/vsc'
import ME from '../../assets/me.png'
import './about.css'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>4 Months Internship</small>
          </article>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <VscFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>
      </div>
      <p>
        Work efficiently during time constraints and in stressful situations to meet project deadlines and schedules. A patient, a good collaborator who is open-minded, works well with others, and assists others in completing tasks. 
      </p>

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </section>
  )
}
