import Image from 'next/image';
import React, { useState } from 'react';
import { Data } from './data';
import styles from './OurWorks.module.css';

export interface IOurWorks extends React.ComponentPropsWithoutRef<'section'> { }


const OurWorks: React.FC<IOurWorks> = ({ className, ...sectionProps }) => {

  const [items, setItems] = useState(Data)
  const [selectedMenu, setSelectedMenu] = useState('All')

  const menuItems = [...Array.from(new Set(Data.map((val) => val.category)))]

  const filterItem = (cat: string) => {
    if (cat === 'All') {
      setSelectedMenu('All')
      setItems(Data)
    } else {
      const filteredItems = Data.filter((item) => item.category === cat);
      setItems(filteredItems)
      setSelectedMenu(filteredItems[0].category)
    }
  }

  return (
    <section className='px-2 sm:px-10 md:px-20 py-10 bg-slate-200'>
      <p className='py-1 px-2 bg-blue-600/50 text-sm inline-block'>Our Projects</p>
      <div className='flex flex-col lg:flex-row items-center justify-between'>
        <h1 className='text-[28px] md:text-[48px] font-medium w-[50vw]'>Some of our finest work</h1>
        <div className='flex items-center justify-around w-[40vw]'>
          {menuItems.map((val, index) => (
            <div key={index}>
              <button
                className={`${styles.filterBtn} ${val === selectedMenu ? styles.selected : ''} text-sm px-2 md:px-8`}
                onClick={() => filterItem(val)}
              >
                {val}
              </button>
            </div>
          ))
          }
          <div>
            <button
              onClick={() => filterItem('All')}
              className={`${styles.filterBtn} ${selectedMenu === 'All' ? styles.selected : ''} text-sm px-3 md:px-8`}
            >
              All
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 px-4'>
        {items.map(({ image, title, category, id }) => (
          <div key={id} className='flex flex-col gap-8 h-[300px]'>
            <div className={`${styles.imageContainer} relative w-full h-full`}>
              <Image className='object-cover' src={image} alt='Image of work' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
              <div className={`${styles.border}`}></div>
            </div>
            <div>
            <p className='text-xl font-bold'>{title}</p>
            <p>{category}</p>
            </div>
          </div>
        ))
        }
      </div>
      <div className='mt-10 text-center'>
        <button className={`btn btnAnimated text-sm md:text-base`}>More Projects</button>
      </div>
    </section>
  );
};

export default OurWorks;