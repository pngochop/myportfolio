import React from 'react'
import {AiOutlineHome, AiOutlineUser,AiOutlineMessage} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import './nav.css'
import {useState} from 'react'

export const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href='#experience'onClick={() => setActiveNav('#experience')} className={activeNav==='#experience'?'active':''} ><BiBook/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}
