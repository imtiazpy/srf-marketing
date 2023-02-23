import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { menuItems } from '../menuItems';
import styles from './SliderMenu.module.css';

export interface IMenu extends React.ComponentPropsWithoutRef<'div'> {
  // isOpen: Boolean;
  type: any;
}

const Menu: React.FC<IMenu> = ({ className, type, ...dibProps }) => {
  return (
    <MenuContainer>

      <motion.div
        className={`px-2 sm:px-10 md:px-20 pb-10 space-y-1 flex flex-col items-start h-full pt-[10vh] bg-[#ece3f333] backdrop-blur-[5px] gap-4`}
        variants={type}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {menuItems.map(({ name, label }, index) => (
          <Link
            key={index}
            href={`/#${name}`}
            scroll={false}
            className={`text-black cursor-pointer hover:bg-[#01be96] hover:text-white px-3 py-2 rounded-md text-sm font-medium shadow-lg`}
          >
            {label}
          </Link>
        ))}
      </motion.div>

    </MenuContainer>
  );
};

export default Menu;


const MenuContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
`

const MenuItems = styled.div`
  padding-top: 10vh;
  background-color: rgba(236, 227, 243, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 5px #000;
  height: 100%;
  
`