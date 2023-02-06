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
    <div className={`${styles.scene} group h-80 border-2 border-purple-600 rounded-xl`}>

      <div className={`${styles.card} relative h-full w-full border border-purple-600 rounded-lg ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>

        {/* Card Front */}
        <div className={`${styles.card__front}`}>
          <div className={`${styles.card__front__image} w-44 h-44 relative`}>
            <Image src={image} className='rounded-full object-cover' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' alt='Photo of Team member' placeholder='blur' />
          </div>
          <div className={`${styles.card__front__content} flex flex-col items-center gap-1 py-1`}>
            <h4>{name}</h4>
            <p>{designation}</p>
            <button onClick={flip} className='border rounded-lg p-1 hover:bg-yellow-700'>See Bio</button>
          </div>
        </div>

        {/* Card Back */}
        <div className={`${styles.card__back} py-2 gap-4 [transform:rotateY(180deg)]`}>

          <div className={`${styles.card__back__content} flex flex-col items-center justify-start px-2 gap-2`}>
            <h1 className="text-xl font-bold">{name}</h1>
            <p>{bio}</p>
            <button onClick={flip} className="mt-2 rounded-md bg-neutral-800 py-1 px-2 hover:bg-neutral-900 text-xs">Go Back</button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default TeamCard;