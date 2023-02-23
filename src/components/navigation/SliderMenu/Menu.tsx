import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { menuItems } from '../menuItems';

import styles from './SliderMenu.module.css';

export interface IMenu extends React.ComponentPropsWithoutRef<'div'> {
  isOpen: Boolean;
}

const Menu: React.FC<IMenu> = ({ className, isOpen, ...dibProps }) => {
  return (
    <MenuContainer className={`${styles.mobile__menu} ${isOpen ? styles.show : styles.hide}`}>

      <MenuItems
        className={`px-2 sm:px-10 md:px-20 pt-2 pb-10 space-y-1`}
      >
        {menuItems.map(({ name, label }, index) => (
          <Link
            key={index}
            href={`/#${name}`}
            scroll={false}
            className={`text-black cursor-pointer hover:bg-[#01be96] hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
          >
            {label}
          </Link>
        ))}
      </MenuItems>

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
  // z-index: 60;
  transition: transform .5s cubic-bezier(.43,.09,.53,.9);
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