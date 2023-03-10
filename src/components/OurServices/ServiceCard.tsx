import React from 'react';
import Icon from '../common/Icon';

// import { FaEdit, FaChartLine, FaCode } from 'react-icons/fa';

import styles from './OurServices.module.css';

export interface IServiceCard extends React.ComponentPropsWithoutRef<'div'> {
  icon: string;
  title: string;
  content: string;
}


const ServiceCard: React.FC<IServiceCard> = ({ icon, title, content, className, ...divProps }) => {

  return (
    <div className={`${styles.cardBgBlur} flex flex-col gap-4 p-8 bg-black/50 rounded-md`}>
      <Icon iconName={icon} />
      <h2 className='text-xl text-white'>{title}</h2>
      <p className='text-gray-400'>{content}</p>
      <p className='text-red-500'>Know more</p>
    </div>
  );
};

export default ServiceCard;