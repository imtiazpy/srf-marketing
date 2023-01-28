import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { MenuItems } from '../MenuItems';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> { }

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  return (
    <header {...headerProps} className={`${className}`}>
      <div>
        <nav className="shadow-sm w-full z-10">
          <div className="w-full">
            <div className="flex items-center h-20 w-full">
              <div className="flex items-center  mx-20  justify-between w-full">
                <div className="flex justify-center items-center flex-shrink-0 ">
                  <h1 className=" font-bold text-xl cursor-pointer">
                    <Link href="/" scroll={false}>
                      Marketing<span className="text-blue-600">Agency</span>
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
              <div className="mr-10 flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <i className="fas fa-toggle-off"></i>
                  ) : (
                    <i className="fas fa-toggle-on"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="flex flex-col bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                >
                  {MenuItems.map(({ name, label }, index) => (
                    <Link
                      key={index}
                      href={`/${name}`}
                      scroll={false}
                      className={`${router.pathname == `/${name}`
                        ? 'text-blue-500'
                        : 'text-black'
                        } cursor-pointer hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {label}
                    </Link>
                  ))}

                  
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </header>
  );
};

export default Header;