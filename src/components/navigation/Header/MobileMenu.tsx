import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { MenuItems } from '../MenuItems';

import styles from './Header.module.css';

export interface IMobileMenu extends React.ComponentPropsWithoutRef<'div'> {
  isOpen: Boolean;
}

const MobileMenu: React.FC<IMobileMenu> = ({ className, isOpen, ...dibProps }) => {
  return (
    <MenuContainer className={`${styles.mobile__menu} ${isOpen ? styles.show : styles.hide}`}>

      <Menu
        className={`px-2 sm:px-10 md:px-20 pt-2 pb-10 space-y-1`}
      >
        {MenuItems.map(({ name, label }, index) => (
          <Link
            key={index}
            href={`/#${name}`}
            scroll={false}
            className={`text-black cursor-pointer hover:bg-[#01be96] hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
          >
            {label}
          </Link>
        ))}
      </Menu>

    </MenuContainer>
  );
};

export default MobileMenu;


const MenuContainer = styled.div`
  position: fixed;
  right: 0;
  top: 10vh;
  width: 50vw;
  height: 100vh;
  z-index: 60;
  transition: transform .5s cubic-bezier(.43,.09,.53,.9);
`

const Menu = styled.div`
  background-color: rgba(236, 227, 243, 0.9);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 5px #000;
  height: 100%;
  
`