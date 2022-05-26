import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail/>
            <h4>Email</h4>
            <h5>hop.pham.n@gmail.com</h5>
            <a href='mailto:hop.pham.n@gmail.com'>Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}
