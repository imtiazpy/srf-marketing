import React from 'react';
import Image from 'next/image'
import { FaGlobeAmericas, FaDatabase, FaShieldAlt, FaChartLine } from 'react-icons/fa';

import AboutItem from './AboutItem';


export interface IAboutUs extends React.ComponentPropsWithoutRef<'section'> {

}

const AboutUs: React.FC<IAboutUs> = ({ className, ...sectionProps }) => {
  return (
    <section className='h-auto md:h-[90vh] px-2 sm:px-10 md:px-20 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 bg-purple-900 object-cover gap-10'>
      <div>
        <Image priority style={{width: 'auto', height: 'auto'}} src="/about-us-transparent.png" alt="group photo" width='600' height='600' />
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-white'>Our Achievements</p>
        <h1 className='text-3xl font-semibold text-white'>Stuff about us</h1>
        <p className='text-gray-400'>We are the best digital agency specialized in social media marketing. Our team is comprised of experts in the field who use innovative strategies to help businesses succeed in the ever-evolving world of social media. Trust us to enhance your online presence and drive real results for your brand.</p>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4'>
          <AboutItem icon={<FaGlobeAmericas color='red' size={'24px'} />} info='35% share in global internet traffic.' />
          <AboutItem icon={<FaDatabase color='green' size={'24px'} />} info='300+ data centers all over the world.' />
          <AboutItem icon={<FaShieldAlt color='lightblue' size={'24px'} />} info='10M+ users data is under protection.' />
          <AboutItem icon={<FaChartLine color='purple' size={'24px'} />} info='22% global internet market shares.' />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;