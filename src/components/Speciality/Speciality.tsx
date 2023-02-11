import React, { useState } from 'react';
import SpecialityCard from './SpecialityCard';
import { specialData } from './specialData';

export interface ISpciality extends React.ComponentPropsWithoutRef<'section'> { }

const Speciality = () => {

  const [data, setData] = useState(specialData)

  return (
    <section className='h-auto md:h-[90vh] px-2 sm:px-10 md:px-20 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-100'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold order-2 text-black'>What makes us special?</h1>
          <span className='green'>Experts in the field</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur, voluptas vero reprehenderit omnis quia! Tempora saepe nam deserunt maxime omnis distinctio, temporibus vitae at corrupti repellat eius repudiandae
        </p>
        <button className={`btn btnAnimated text-sm md:text-base w-40`}>Careers</button>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-8`}>
        {data.map(({ icon, count, content, id }) => (
          <SpecialityCard key={id} icon={icon} count={count} content={content} />
        ))

        }
      </div>
    </section>
  );
};

export default Speciality;