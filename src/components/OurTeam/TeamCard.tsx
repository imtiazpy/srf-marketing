import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

import styles from './TeamCard.module.css';

export interface ITeamCard extends React.ComponentPropsWithoutRef<'div'> {
  image: StaticImageData;
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
    <div className={`${styles.scene} group h-80`}>

      <div onClick={flip} className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>

        {/* Card Front */}
        <div className={`absolute inset-0 flex flex-col items-center border-2 border-purple-600 rounded-lg text-white py-4 gap-4 shadow-lg shadow-red-500/50 cursor-pointer ${styles.cardFront}`}>
          <div className='w-48 h-48 relative'>
            <Image src={image} className='rounded-full object-cover' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' alt='Photo of Team member' placeholder='blur' />
          </div>
          <div className='flex flex-col items-center gap-2'>
            <h4>{name}</h4>
            <p>{designation}</p>
            <button className='text-xs border rounded-lg p-1 hover:bg-yellow-700'>See Bio</button>
          </div>
        </div>

        {/* Card Back */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center border-2 border-purple-600 rounded-lg text-white py-4 gap-4 shadow-lg shadow-red-500/50 cursor-pointer [transform:rotateY(180deg)] ${styles.cardBack}`}>
          <div className="flex flex-col items-center justify-start px-1 gap-2 mt-2">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-base">{bio}</p>
          </div>
          <button className="absolute top-1 left-1 mt-2 rounded-md bg-neutral-800 py-1 px-2 hover:bg-neutral-900 text-xs">Go Back</button>

        </div>

      </div>


    </div>
  );
};

export default TeamCard;