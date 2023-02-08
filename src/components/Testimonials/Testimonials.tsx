import React, { useState } from 'react';
import { motion } from "framer-motion";

import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonialsData';
import styles from './Testimonials.module.css';

export interface ITestimonials extends React.ComponentPropsWithoutRef<'section'> {

}

const Testimonials: React.FC<ITestimonials> = ({ className, ...sectionProps }) => {

  const [data, setData] = useState(testimonials)
  


  return (
    <section className=''>
      
    </section>
  );
};

export default Testimonials;