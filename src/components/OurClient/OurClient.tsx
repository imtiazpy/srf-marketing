import React from 'react';
import Image from 'next/image';
import styles from './OurClient.module.css';
import Info from './Info';

export interface IOurClient extends React.ComponentPropsWithoutRef<'section'> {

}

const OurClient: React.FC<IOurClient> = ({ className, ...sectionProps }) => {
  return (
    <section>
      <div className={`${styles.bgImage} flex items-center justify-center md:justify-between flex-wrap gap-4 px-2 sm:px-10 md:px-20`}>
        <Info title='3000+' info='Happy Clients' />
        <Info title='40+' info='Million Revenue' />
        <Info title='5000+' info='Completed Projects' />
        <Info title='1000+' info='Creative Employees' />
      </div>
      <div className='flex items-center justify-around flex-wrap gap-4 py-10 px-2 sm:px-10 md:px-20'>
        <Image style={{width: 'auto', height: 'auto'}} src='/logoipsum-284.svg' alt='company logo' width={80} height={20} />
        <Image style={{width: 'auto', height: 'auto'}} src='/logoipsum-285.svg' alt='company logo' width={150} height={20} />
        <Image style={{width: 'auto', height: 'auto'}} src='/logoipsum-286.svg' alt='company logo' width={150} height={20} />
        <Image style={{width: 'auto', height: 'auto'}} src='/logoipsum-288.svg' alt='company logo' width={150} height={20} />
        <Image style={{width: 'auto', height: 'auto'}} src='/logoipsum-290.svg' alt='company logo' width={80} height={20} />
        <Image style={{width: 'auto', height: 'auto'}} src='/logoipsum-256.svg' alt='company logo' width={80} height={20} />
      </div>
    </section>
  );
};

export default OurClient;