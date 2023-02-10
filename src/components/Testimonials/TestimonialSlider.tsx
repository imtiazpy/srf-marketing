import React, { useRef, useState } from 'react';
import { testimonials } from './testimonialsData';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import TestimonialCard from './TestimonialCard';

export interface ITestimonialSlider extends React.ComponentPropsWithoutRef<'div'> { }

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

type SliderType = {
  slickPrev: () => void;
  slickNext: () => void;
};

const TestimonialSlider: React.FC<ITestimonialSlider> = ({ className, ...divProps }) => {
  const [data, setData] = useState(testimonials)
  const buttonRef = useRef<SliderType>(null)

  let testimonialsData = data.map(({ id, name, company, designation, testimonial, image }) => (
    <TestimonialCard key={id} name={name} company={company} designation={designation} testimonial={testimonial} image={image} />
  ))

  const handlePrev = () => {
    if (buttonRef.current) {
      buttonRef.current.slickPrev();
    }
  };
  
  const handleNext = () => {
    if (buttonRef.current) {
      buttonRef.current.slickNext();
    }
  };

  return (
    <>
      <Client>
        <Slider ref={buttonRef} {...settings}>
          {testimonialsData}
        </Slider>
        <Buttons>
          <button onClick={handlePrev}>
            <FaArrowAltCircleLeft />
          </button>
          <button onClick={handleNext}>
            <FaArrowAltCircleRight />
          </button>
        </Buttons>
      </Client>
    </>
  );
};

export default TestimonialSlider;

const Client = styled.div`
  position: relative;

  .slick-list, .slick-slider, .slick-track {
    padding: 0.5rem 0;
  }

  .slick-dots{
    text-align: left;
    padding-left: 1rem;
  }
  .slick-dots li button:before{
    content: "";
  }

  .slick-dots li button{
    background: linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
    height: 4px;
    width: 9px;
    padding: 0.1rem;
    border-radius: 50px;
    transition: all 500ms ease-in-out;
  }

  .slick-dots li.slick-active button{
    background: #01be96;
    width: 15px;
  }
`

const Buttons = styled.div`
  position: absolute;
  right: 1rem;
  bottom: -1.5rem;
  button{
    background-color: transparent;
    border: none;
    margin-left: 0.5rem;
    color: #01be96;
    cursor: pointer;
    font-size: 1.4rem;
  }
  @media(max-width : 600px){
    display: none;
  }
`