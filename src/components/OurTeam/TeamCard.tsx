import Image from 'next/image';
import React from 'react';

export interface ITeamCard extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  name: string;
  designation: string;
};

const TeamCard: React.FC<ITeamCard> = ({ image, name, designation, className, ...divProps }) => {
  return (
    <div className='flex flex-col items-center border-2 border-purple-600 rounded-lg text-white py-4 gap-4 shadow-lg shadow-red-500/50 cursor-pointer'>
      <div className='w-48 h-48 relative'>
        <Image priority className='rounded-full object-cover' fill src={image} alt='Photo of Team member' />
      </div>
      <div className='flex flex-col items-center'>
        <h4>{name}</h4>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;