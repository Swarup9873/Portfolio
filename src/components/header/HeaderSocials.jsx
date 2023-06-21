import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/pratik-das-675b661b5/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/pratik2050" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/pra_tik_57" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials