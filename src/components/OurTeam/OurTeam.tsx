import React from 'react';
import TeamCard from './TeamCard';
import styles from './OurTeam.module.css';

import alexanderPic from '../../../public/alexander.jpg';
import alexPic from '../../../public/alex-suprun.jpg';
import julianPic from '../../../public/julian.jpg';
import oguzPic from '../../../public/oguz.jpg';

export interface IOurTeam extends React.ComponentPropsWithoutRef<'section'> {

}

const OurTeam: React.FC<IOurTeam> = ({ className, ...sectionProps }) => {
  return (
    <section className={`${styles.bgImage} px-2 sm:px-5 md:px-10 py-10 flex flex-col gap-6 `}>
      <div className='flex flex-col gap-2'>
        <span className='green'>Specials behind great work</span>
        <h1 className='text-3xl font-semibold text-white'>Meet our Team</h1>
        <p className='text-white'>We have highly skilled professionals continuously services for incredible results.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        
        <TeamCard image={alexanderPic} name='Alexander' designation='Web Designer' bio="Web design is more than just aesthetics for this creative mastermind. With a deep understanding of user experience and a passion for clean, functional design, this web designer crafts online experiences that not only look good but also deliver results." />

        <TeamCard image={alexPic} name='Alex Suprun' designation='Graphic Designer' bio='From logos and branding materials to web and print designs, this designer has a proven track record of creating impactful work for clients across multiple industries. When not at the computer, you can find this designer exploring the city for inspiration, sketching in a notebook, or trying out new design software.' />

        <TeamCard image={julianPic} name='Julian' designation='UI/UX Designer' bio='With a background in psychology and a passion for design, this UI/UX designer creates digital products that are both visually stunning and user-friendly. From researching user behavior to prototyping and testing, this designer approaches each project with a user-centered mindset to ensure that the final product meets the needs of its target audience.' />

        <TeamCard image={oguzPic} name='Oguz' designation='Web Developer' bio="Code is the canvas for this web developer, who brings websites and web applications to life with their mastery of HTML, CSS, JavaScript, and beyond. With a focus on clean, efficient code and a passion for innovation, this developer is always pushing the boundaries of what's possible on the web." />

      </div>
    </section>
  );
};

export default OurTeam;