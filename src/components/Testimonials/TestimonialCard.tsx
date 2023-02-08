import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import styles from './Testimonials.module.css';


export interface ITestimonialCard extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  name: string;
  designation: string;
  company: string;
  testimonial: string;
}


const TestimonialCard: React.FC<ITestimonialCard> = ({ image, name, designation, company, testimonial, className, ...divProps }) => {
  return (
    <div className={`${styles.shadow} p-8 text-center rounded-lg border-2 border-yellow-300`}>
      <div className={`relative  p-4 flex flex-col items-center gap-4`}>
        <div>
          <Image className='rounded-full' src={image} alt='client image' width={100} height={100} />
        </div>
        <div className='relative p-4'>
          <p>{testimonial}</p>
          <p>--{name}, {designation}, {company}</p>
          <FaQuoteLeft className='absolute top-0 left-0' size={'24px'} color='green' />
        <FaQuoteRight className='absolute bottom-0 right-0' size={'24px'} color='green' />
        </div>
        
      </div>
    </div>
  );
};

export default TestimonialCard;