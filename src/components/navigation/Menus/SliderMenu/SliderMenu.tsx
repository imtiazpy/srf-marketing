import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import Menu from '../Menu';
import { AnimatePresence } from 'framer-motion';

/* variant for framer-motion animation. */
const slideInLeft = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: "10vw",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 30,
      stiffness: 300,
    }
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 40,
      stiffness: 100
    }
  }
}

const SliderMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {!isOpen ? (
          <FaBars />
        ) : (
          <FaRegWindowClose />
        )}
      </MenuButton>
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

const MenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: white;
  z-index: 1000;
  &:hover {
    background-color: #01be96;
  }
`