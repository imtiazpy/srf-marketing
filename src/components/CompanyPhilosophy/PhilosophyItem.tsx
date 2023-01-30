import React, { ReactNode } from 'react';

export interface IPhilosophyItem extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  icon: ReactNode;
  content: string;
}

const PhilosophyItem: React.FC<IPhilosophyItem> = ({ className, title, icon, content, ...divProps }) => {
  return (
    <div>
      <div className='flex flex-col gap-4 px-10 mb-20'>
        <div className='flex items-center gap-2'>
          {icon}
          {title}
        </div>
        <div>
          <p className='text-sm'>{content}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PhilosophyItem;