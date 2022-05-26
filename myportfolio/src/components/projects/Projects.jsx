import React from 'react'
//import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import './projects.css';

const data = [
    {
        name: 'Hop Pham',
        detail: 'hello, I am testing my data loading 2 \n hello, I am testing my data loading 2 \n Test new line hello, I am testing my data loading 2 \n Test new line'
    },
    {
        name: 'Hop Pham Ngoc',
        detail: 'hello, I am testing my data loading 2 \n Test new line hello, I am testing my data loading 2 \n Test new line'
    }
];
export const Projects = () => {
  return (
    <section id="projects">
        <h5>My Projects</h5>
        <h2>Projects</h2>
        <Swiper className="container project__container"
        //install Swiper modules
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}>
            {
                data.map(({name, detail}, index) => {
                    return (
                        <SwiperSlide key={index} className="project">
                            <h5 className='project__name'>{name}</h5>
                            <small className='project__detail'>{detail}</small>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

