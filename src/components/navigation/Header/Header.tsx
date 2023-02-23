import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import styled from 'styled-components';

import { menuItems } from '../menuItems';
import MobileMenu from '../SliderMenu/Menu';
import SliderMenu from '../SliderMenu/SliderMenu';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> { }

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  return (
    <header {...headerProps}>
      <nav className="shadow-lg z-50 fixed w-full top-0">
        <div>
          <div className="flex items-center h-[10vh] px-2 sm:px-5 md:px-10">
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className="font-bold text-xl cursor-pointer">
                  <Link href="/#hero-section" scroll={false} className='uppercase text-sm xs:text-base sm:text-xl text-white'>
                    Marketing<span className="text-[#01be96]">Agency</span>
                  </Link>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  {menuItems.map(({ name, label }, index) => (
                    <Link
                      key={index}
                      href={`/#${name}`}
                      scroll={false}
                      className={`${router.pathname == `/${name}`
                        ? 'text-blue-600'
                        : 'text-white'
                        } cursor-pointer hover:bg-[#01be96] hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex md:hidden ">
              {/* <MenuButton
                onClick={() => setIsOpen(!isOpen)}
                type="button"
              >
                {!isOpen ? (
                  <FaBars />
                ) : (
                  <FaRegWindowClose />
                )}
              </MenuButton> */}
              <SliderMenu />
            </div>
          </div>
        </div>
      </nav>
      {/* <MobileMenu isOpen={isOpen} /> */}
    </header>
  );
};

export default Header;

const MenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: black;
  &:hover {
    background-color: #01be96;

  }
`
