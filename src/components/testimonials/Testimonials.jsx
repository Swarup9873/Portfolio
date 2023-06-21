import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/srikar-seethiraju',
      name: 'Srikar Seethiraju',
      role: 'Software Developer - Samsung',
      test: 'As a developer and a problem solver, I think Pratik is a great collaborative partner to have. I met Pratik during my College days and I have seen his ups and downs. I can asure you he is a great partner to have',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/joydipta-chanda/',
      name: 'Joydipta Chanda',
      role: 'Software Engineer - Tata Elxsi',
      test: "As a developer and a problem solver, I think Pratik is a great collaborative partner to have. I met Pratik during my College days and I have seen his ups and downs. I can asure you he is a great partner to have",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/rohit-saha-901503205/',
      name: 'Rohit Saha',
      role: 'Software Engineer - AWS',
      test: 'As a developer and a problem solver, I think Pratik is a great collaborative partner to have. I met Pratik during my College days and I have seen his ups and downs. I can asure you he is a great partner to have',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/supratim-choudhury-37678446/',
      name: 'Supratim Choudhury',
      role: 'System Engineer - Infosys',
      test: 'As a developer and a problem solver, I think Pratik is a great collaborative partner to have. I met Pratik during my College days and I have seen his ups and downs. I can asure you he is a great partner to have',
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <h5 className='client__role'>{test.role}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials