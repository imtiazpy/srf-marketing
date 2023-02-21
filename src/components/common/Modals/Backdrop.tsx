import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface IBackdrop extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  handleClick: any;
}

const Backdrop: React.FC<IBackdrop> = ({ className, children, handleClick, ...dibProps }) => {
  return (
    <BackdropContainer>
      <motion.div
        onClick={handleClick}
        className='backdrop'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </BackdropContainer>
  );
};

export default Backdrop;

const BackdropContainer = styled.div`
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000000e1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
  }
`