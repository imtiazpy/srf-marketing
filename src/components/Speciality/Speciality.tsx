import React, { useState } from 'react';
import SpecialCard from './SpecialCard';
import { specialData } from './specialData';

import styles from './SpecialCard.module.css';

export interface ISpciality extends React.ComponentPropsWithoutRef<'section'> { }

const Speciality = () => {

  const [data, setData] = useState(specialData)

  return (
    <section className='px-2 sm:px-10 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-4 bg-purple-800'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold order-2 text-white'>What makes us special?</h1>
          <p className='text-red-600'>Experts in the field</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur, voluptas vero reprehenderit omnis quia! Tempora saepe nam deserunt maxime omnis distinctio, temporibus vitae at corrupti repellat eius repudiandae
        </p>
        <button className={`btn btnAnimated text-sm md:text-base w-40`}>Careers</button>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-8`}>
        {data.map(({ icon, count, content, id }) => (
          <SpecialCard key={id} icon={icon} count={count} content={content} />
        ))

        }
      </div>
    </section>
  );
};

export default Speciality;