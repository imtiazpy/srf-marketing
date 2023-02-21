import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../navigation/Header/Header';


export interface ILayout extends React.ComponentPropsWithoutRef<'div'> {

}

const Layout: React.FC<ILayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Header />
      <main className="flex-grow relative">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;