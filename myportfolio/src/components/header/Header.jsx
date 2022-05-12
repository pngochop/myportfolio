import React from 'react'
import {CTA} from './CTA'
import ME from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials'
import './header.css'


export const Header = () => {
  return (
    <header> 
      <div className="contianer header_container">
        <h5>Hello I'm</h5>
        <h1>Hop Pham</h1>
        <h5 className="text-light"> Fullstact Developer </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}
