import React, { ReactNode } from 'react';
import styles from './About.module.css';

export interface IAboutItem extends React.ComponentPropsWithoutRef<'div'> {
  icon: ReactNode;
  info: string;
}

const AboutItem: React.FC<IAboutItem> = ({ icon, info, className, ...divProps }) => {
  return (
    <div className={`flex items-center justify-around px-10 py-6 gap-4 text-white ${styles.bgDarkTransparent}`}>
      <div>
        {icon}
      </div>
      <p>{info}</p>
    </div>
  );
};

export default AboutItem;