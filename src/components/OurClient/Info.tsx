import React from 'react';

export interface IInfo extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  info: string;
}

const Info: React.FC<IInfo> = ({ title, info, className, ...divProps }) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-bol text-white'>{title}</h1>
      <p className='text-gray-300'>{info}</p>
    </div>
  );
};

export default Info;