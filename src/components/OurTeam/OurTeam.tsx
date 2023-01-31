import React from 'react';
import TeamCard from './TeamCard';

export interface IOurTeam extends React.ComponentPropsWithoutRef<'section'> {

}

const OurTeam: React.FC<IOurTeam> = ({ className, ...sectionProps }) => {
  return (
    <section className='px-20 py-10 flex flex-col gap-6 bg-purple-400'>
      <div className='flex flex-col gap-2'>
        <span className='text-red-600'>Specials behind great work</span>
        <h1 className='text-3xl font-semibold text-white'>Meet our Team</h1>
        <p className='text-white'>We have highly skilled professionals continuously services for incredible results.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <TeamCard image='/alex-suprun.jpg' name='Alex Suprun' designation='Graphic Designer' />
        <TeamCard image='/alexander.jpg' name='Alexander' designation='Web Designer' />
        <TeamCard image='/julian.jpg' name='Julian' designation='UI/UX Designer' />
        <TeamCard image='/oguz.jpg' name='Oguz' designation='Web Developer' />
      </div>
    </section>
  );
};

export default OurTeam;