import React, { ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';

import TestimonialSlider from './TestimonialSlider';

export interface ITestimonials extends React.ComponentPropsWithoutRef<'section'> {

}

const Testimonials: React.FC<ITestimonials> = ({ className, ...sectionProps }) => {

  return (
    <Container className='h-auto md:h-[90vh] px-2 sm:px-10 md:px-20 py-10 md:py-20 bg-violet-600/70'>
      <div className='flex flex-col gap-2 mb-4'>
        <h1 className='text-3xl font-bold order-2 text-white'>
          What clients have been saying about our services
        </h1>
        <span className="green">TESTIMONIALS</span>
      </div>
      <Clients>
        <TestimonialSlider />
      </Clients>
    </Container>
  )
}

export default Testimonials;

const Container = styled.section`
  .green {
    color: #01be96;
    font-size: 0.8rem;
    font-weight: 700;
  }
`

const Clients = styled.div`
`