import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';

import Menu from '../Menu';
import BurgerButton from './BurgerButton';


/* variant for framer-motion animation. */
const slideInLeft = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: "5vw",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 30,
      stiffness: 300,
      staggerChildren: 0.07, 
      delayChildren: 0.2
    }
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 100,
      staggerChildren: 0.05, 
      staggerDirection: -1
    }
  }
}

const SliderMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <BurgerButton isOpen={isOpen} toggleOpen={toggleOpen} />
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {isOpen &&
          <Menu type={slideInLeft} />
        }
      </AnimatePresence>

    </>
  );
};

export default SliderMenu;