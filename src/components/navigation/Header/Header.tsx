import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { MenuItems } from '../MenuItems';
import styles from './Header.module.css';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> { }

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  return (
    <header {...headerProps} className={`${className}`}>
      <div>
        <nav className="shadow-lg z-50 fixed w-full top-0">
          <div className={`w-full ${styles.bgTransparent}`}>
            <div className="flex items-center h-[10vh] w-full px-2 sm:px-5 md:px-10">
              <div className="flex items-center justify-between w-full">
                <div className="flex justify-center items-center flex-shrink-0 ">
                  <h1 className=" font-bold text-xl cursor-pointer">
                    <Link href="/" scroll={false} className='uppercase text-sm xs:text-base sm:text-xl'>
                      Marketing<span className="text-[#01be96]">Agency</span>
                    </Link>
                  </h1>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {MenuItems.map(({ name, label }, index) => (
                      <Link
                        key={index}
                        href={`/${name}`}
                        scroll={false}
                        className={`${router.pathname == `/${name}`
                          ? 'text-blue-600'
                          : 'text-black'
                          } cursor-pointer hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <FaToggleOff />
                  ) : (
                    <FaToggleOn />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className='absolute w-full right-0'>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {
                <div className="md:hidden" id="mobile-menu">
                  <div
                    className={`${styles.bgTransparent} flex flex-col shadow-lg px-2 sm:px-10 md:px-20 pt-2 pb-10 space-y-1`}
                  >
                    {MenuItems.map(({ name, label }, index) => (
                      <Link
                        key={index}
                        href={`/${name}`}
                        scroll={false}
                        className={`${router.pathname == `/${name}`
                          ? 'text-blue-500'
                          : 'text-white'
                          } cursor-pointer hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        {label}
                      </Link>
                    ))}


                  </div>
                </div>
              }
            </Transition>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;