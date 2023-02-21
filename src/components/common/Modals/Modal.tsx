import React, { ReactNode } from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

import Backdrop from './Backdrop';

export interface IModal extends React.ComponentPropsWithoutRef<'div'>{
  children: ReactNode;
  handleClose: any;
  type: any;
}

const Modal: React.FC<IModal> = ({ className, handleClose, type, children, ...divProps }) => {
  return (
    <ModalContainer>
      <Backdrop handleClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className='modal orange-gradient'
          variants={type}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.div>
      </Backdrop>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  .modal {
    width: clamp(50%, 700px, 90%);
    height: min(70%, 400px);

    margin: auto;
    // padding: 0 2rem;
    // border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .orange-gradient {
    // background: linear-gradient(10deg, #ffaa00, #ff6a00);
  }
`