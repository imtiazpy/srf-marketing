import React, { ReactNode } from 'react';

import { FaEdit, FaChartLine, FaCode } from 'react-icons/fa';

import styles from './OurServices.module.css';

export interface IServiceCard extends React.ComponentPropsWithoutRef<'div'> {
  icon: string;
  title: string;
  content: string;
}

type Icons = 'edit' | 'code' | 'chart'

const getIconFromName = (iconName: Icons) => {
  switch (iconName) {
    case 'edit':
      return <FaEdit size={'24px'} color='red' />
    case 'code':
      return <FaCode size={'24px'} color='red' />
    case 'chart':
      return <FaChartLine size={'24px'} color='red' />
  }
}

const ServiceCard: React.FC<IServiceCard> = ({ icon, title, content, className, ...divProps }) => {

  const iconComponent = getIconFromName(icon);
  // TODO: We need to solve this error above
  return (
    <div className={`${styles.cardBgBlur} flex flex-col gap-4 p-8 bg-black/50 rounded-md`}>
      {iconComponent}
      <h2 className='text-xl text-white'>{title}</h2>
      <p className='text-gray-400'>{content}</p>
      <p className='text-red-500'>Know more</p>
    </div>
  );
};

export default ServiceCard;