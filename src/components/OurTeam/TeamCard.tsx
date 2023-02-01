import Image from 'next/image';
import React, { useState } from 'react';

import styles from './TeamCard.module.css';

export interface ITeamCard extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  name: string;
  designation?: string;
  bio?: string;
};

const TeamCard: React.FC<ITeamCard> = ({ image, name, designation, bio, className, ...divProps }) => {

  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped)
  }
  return (
    <div className="group h-80 [perspective: 1000px]">

      <div onClick={flip} className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>

        <CardFront image={image} name={name} designation={designation} />

        <CardBack image={image} name={name} designation={designation} bio={bio} />

      </div>


    </div>
  );
};

export default TeamCard;


const CardFront: React.FC<ITeamCard> = ({ image, name, designation, bio, className, ...divProps }) => {
  return (
    <div className={`absolute inset-0 flex flex-col items-center border-2 border-purple-600 rounded-lg text-white py-4 gap-4 shadow-lg shadow-red-500/50 cursor-pointer [backface-visibility:hidden] ${styles.cardFront}`}>
      <div className='w-48 h-48 relative'>
        <Image priority className='rounded-full object-cover' fill src={image} alt='Photo of Team member' />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <h4>{name}</h4>
        <p>{designation}</p>
        <button className='text-xs border rounded-lg p-1 hover:bg-yellow-700'>See Bio</button>
      </div>
    </div>
  )
}


const CardBack: React.FC<ITeamCard> = ({ image, name, designation, bio, className, ...divProps }) => {
  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center border-2 border-purple-600 rounded-lg text-white py-4 gap-4 shadow-lg shadow-red-500/50 cursor-pointer [transform:rotateY(180deg)] [backface-visibility:hidden] ${styles.cardBack}`}>
      <div className="flex flex-col items-center justify-start px-1 gap-2 mt-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-base">{bio}</p>
      </div>
      <button className="absolute top-1 left-1 mt-2 rounded-md bg-neutral-800 py-1 px-2 hover:bg-neutral-900 text-xs">Go Back</button>

    </div>
  )
}