import React from 'react';
import Image from 'next/image'
import { FaAngleRight, FaPlayCircle, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import styles from './Hero.module.css';


export interface IHero extends React.ComponentPropsWithoutRef<'section'> {

}

const Hero: React.FC<IHero> = ({ className, ...sectionProps }) => {

  const iconStyle = { border: '1px solid blue', borderRadius: '50%', padding: '5px', fontSize: '28px' }

  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 pt-20 pb-10 bg-purple-900 px-2 sm:px-10 md:px-20 h-auto`}>
      <div className='flex flex-col gap-8 text-white'>
        <h1 className='text-3xl'>We are <span className='text-red-600'>Creative Agency</span></h1>
        <p>
          Maximize your brand's potential with our full-service marketing agency. With a focus on strategy, creativity, and results, we help businesses reach new heights. Partner with us and experience the power of a dynamic and effective marketing campaign.
        </p>
        <div className='flex gap-4'>
          <button className='flex items-center border-2 border-blue-600 py-1 px-4'>
            Get Started <FaAngleRight />
          </button>
          <div className='flex items-center gap-2'>
            <div className='border-4 border-red-300 rounded-full cursor-pointer'>
              <FaPlayCircle color='red' size='28px' />
            </div>
            <p className='text-sm'>Play video</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div>
          <Image priority style={{width: 'auto', height: 'auto'}} src="/Hero-triangle.png" alt="consistency content engagement" width={600} height={600} />
        </div>
        <div className={`${styles.socialIcons} ${styles.heroImage} flex justify-end items-end gap-2`}>
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
      </div>
    </section>
  );
};

export default Hero;