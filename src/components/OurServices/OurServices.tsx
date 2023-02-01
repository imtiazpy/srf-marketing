import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from './servicesData';

import styles from './OurServices.module.css';


export interface IOurServices extends React.ComponentPropsWithoutRef<'section'> {

}


const OurServices: React.FC<IOurServices> = ({ className, ...sectionProps }) => {
  return (
    <section className={`${styles.bgImage} flex flex-col gap-4 px-20 py-10`}>
      <span className='text-red-500'>We work for your best experience</span>
      <h1 className='text-3xl font-bold text-white'>Our Services</h1>
      <p className='text-gray-100'>We provide best ever services for your great experience. We make all the efforts for the revolutionary change. We appreciate our employees to create future. We promise you that, you will never get disappointed.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          servicesData.map(({ icon, title, content }) => (
            <ServiceCard icon={icon} title={title} content={content} />
          ))
        }
      </div>
    </section>
  );
};

export default OurServices;