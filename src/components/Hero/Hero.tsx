import React, { useState } from 'react';
import { FaAngleRight, FaPlayCircle, FaTwitter, FaInstagram, FaFacebookF, FaRegWindowClose } from 'react-icons/fa'

import styles from './Hero.module.css';
import { DropInModals } from '../common/Modals';

export interface IHero extends React.ComponentPropsWithoutRef<'section'> {

}

const Hero: React.FC<IHero> = ({ className, ...sectionProps }) => {

  const iconStyle = { border: '1px solid blue', borderRadius: '50%', padding: '5px', fontSize: '28px' }

  return (
    <section id='hero-section' className={`${styles.hero} relative h-auto md:h-[100vh] grid grid-cols-1 md:grid-cols-1 py-20 md:py-32 px-2 sm:px-5 md:px-10 items-center`}>
      <div className='flex flex-col gap-8 items-center text-white'>
        <h1 className='text-4xl sm:text-6xl font-extrabold'>We are</h1>
        <span className='text-4xl sm:text-6xl font-extrabold uppercase text-[#01be96]'>
          Creative Agency
        </span>
        <p className='text-lg px-2 md:px-[8rem]'>
          Maximize your brand's potential with our full-service marketing agency. With a focus on strategy, creativity, and results, we help businesses reach new heights. Partner with us and experience the power of a dynamic and effective marketing campaign.
        </p>
        <div className='flex gap-4'>
          <button className='btn btnAnimated flex items-center border-2 border-blue-600 py-1 px-4'>
            Get Started <FaAngleRight />
          </button>
          <div className='flex items-center justify-center gap-2'>
            <div className='cursor-pointer'>
              <DropInModals btnText={<FaPlayCircle size={'30px'} color='red' />}>
                <iframe style={{ border: '0px' }} width="100%" height="100%" src="https://www.youtube.com/embed/aqz-KE-bpKQ" title="Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </DropInModals>
            </div>
            <p className='text-sm'>Play video</p>
          </div>
        </div>
      </div>
      <div className={`${styles.socialIcons} ${styles.heroImage} flex justify-center items-center gap-2`}>
        <FaTwitter
          className={styles.icon}
          style={iconStyle}
        />
        <FaInstagram
          className={styles.icon}
          style={iconStyle}
        />
        <FaFacebookF
          className={styles.icon}
          style={iconStyle}
        />
      </div>
    </section>
  );
};

export default Hero;