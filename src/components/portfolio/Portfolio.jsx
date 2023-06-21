import React from 'react';
import IMG1 from '../../assets/confess.PNG';
import IMG2 from '../../assets/netflix_clone.png';
import IMG3 from '../../assets/chat.PNG'
import IMG4 from '../../assets/power2.PNG';
import IMG5 from '../../assets/saanp.PNG';
import IMG6 from '../../assets/drum.PNG'

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Confession Website',
      img: IMG1,
      description:
        'Confession Website: Developed a user-driven web application allowing individuals to anonymously share their thoughts and experiences. ',
      technologies: 'ReactJS | CSS | Firebase Authentication | Firestore database',
      link: 'https://confessopia.web.app/',
      github: 'https://github.com/Swarup9873/Confessopia/tree/master',
    },
    {
      id: 2,
      title: 'Netflix Clone',
      img: IMG2,
      description: 'Fully functional Netflix Clone with Real Payment Gateway',
      technologies: 'React | Redux | Razorpay Gateway',
      link: 'https://netflix-clone-7a767.firebaseapp.com/',
      github: 'https://github.com/Swarup9873/Netflix-Clone.github.io/tree/master',
    },
    {
      id: 3,
      title: 'Whatsapp-Clone',
      img: IMG3,
      description:
        'Realtime Group Chat Web App that enables multiple users to engage in live conversations, user authentication, chat room creation, and message display with timestamps. ',
      technologies: 'React | Firebase Authentication | Firestore Database',
      link: 'https://whatsapp-clone-3bd40.firebaseapp.com/',
      github: 'https://github.com/Swarup9873/chat-with-me.github.io/tree/master',
    },
    {
      id: 4,
      title: 'PowerX',
      img: IMG4,
      description: 'Peer-2-Peer Energy Sharing Infrastructure, easy-to-use environment for a smooth trading experience.',
      technologies: 'React | NodeJS | ExpressJs | Blockchain | Solidity | Hardhat | web3.js',
      link: 'https://power-x-frontend.vercel.app/',
      github: 'https://github.com/Swarup9873/powerX-frontend',
    },
    {
      id: 5,
      title: 'Snake Game',
      img: IMG5,
      description:
        'A simple snake game featuring dynamic controls, collision detection, and scoring functionality.',
      technologies: 'HTML | CSS | Javascript',
      link: '',
      github: 'https://github.com/Swarup9873/Snake-Game',
    },
    {
      id: 6,
      title: 'Drum Kit',
      img: IMG6,
      description:
        'A drum kit web app, allowing users to play different drum sounds by clicking or pressing corresponding keys.',
      technologies: 'HTML | CSS',
      link: '',
      github: 'https://github.com/Swarup9873/Drum-kit',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
