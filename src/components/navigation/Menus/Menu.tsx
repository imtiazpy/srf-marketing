import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { menuItems } from '../menuItems';

export interface IMenu extends React.ComponentPropsWithoutRef<'div'> {
  type: any;
}

const itemVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const Menu: React.FC<IMenu> = ({ className, type, ...dibProps }) => {
  return (
    <MenuContainer>

      <motion.ul
        className={`px-2 sm:px-10 md:px-20 space-y-1 flex flex-col items-start h-full pt-[20vh] bg-black/50 backdrop-blur-[5px] gap-8 border-l-2 border-[#01be96]`}
        variants={type}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {menuItems.map(({ name, label }, index) => (
          <motion.li
            variants={itemVariant}
            key={index}
          >
            <Link
              key={index}
              href={`/#${name}`}
              scroll={false}
              className={`text-black cursor-pointer bg-[#fdfdfd33] hover:bg-[#01be96] hover:text-white px-3 py-2 rounded-t-3xl rounded-bl-3xl text-sm font-medium shadow-lg`}
            >
              {label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

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