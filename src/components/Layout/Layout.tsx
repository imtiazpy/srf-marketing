import React from 'react';
import Header from '../navigation/Header/Header';


export interface ILayout extends React.ComponentPropsWithoutRef<'div'> {

}

const Layout: React.FC<ILayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Header />
      <main className="md:container flex-grow">{children}</main>
    </>
  );
};

export default Layout;