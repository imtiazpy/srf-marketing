import React from 'react';
import Icon from '../common/Icon';

import styles from './SpecialCard.module.css';

export interface ISpecialCard extends React.ComponentPropsWithoutRef<'div'> {
  icon: string;
  count: number;
  content: string;
}


const SpecialCard: React.FC<ISpecialCard> = ({ icon, count, content, className, ...divProps }) => {
  return (
    <div className={`${styles.card} relative  p-4`}>
      <div className={`${styles.card__content} flex flex-col items-center justify-center gap-4`}>
        <div>{<Icon iconName={icon} />}</div>
        <p className='text-3xl font-bold'>{count}+</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SpecialCard;