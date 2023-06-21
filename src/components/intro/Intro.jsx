import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import dp from '../../assets/dp.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={dp} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Counting...</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>I’ve spent the several months in a remote environment, working with HTML, CSS, JavaScript, building everything from 
            landing pages to APIs. I have also worked  projects ranging from Snake games to Confession websites. Currently I am a B.Tech student
            at Jadavpur University with specialization in Electronics and Communication Enginnering.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk More</a>
        </div>
      </div>
    </section>
  )
}

export default Intro