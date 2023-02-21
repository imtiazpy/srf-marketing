import React, { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './Modal';

export interface IDropInModals extends React.ComponentPropsWithoutRef<'div'> {
  btnText: any;
  children: ReactNode;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const DropInModals: React.FC<IDropInModals> = ({ className, btnText, children, ...divProps }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleModal}
      >
        {btnText}
      </motion.button>
      <AnimatePresence
        initial={false}
        // exitBeforeEnter={true}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen &&
          <Modal handleClose={toggleModal} type={dropIn}>
            {children}
          </Modal>
        }
      </AnimatePresence>
    </div>
  );
};

export default DropInModals;

