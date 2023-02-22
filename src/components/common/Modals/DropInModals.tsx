import React, { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './Modal';

export interface IDropInModals extends React.ComponentPropsWithoutRef<'div'> {
  icon: ReactNode;
  btnText: string;
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

const DropInModals: React.FC<IDropInModals> = ({ className, icon, btnText, children, ...divProps }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }
  return (
    <>
      <motion.button
        whileHover={{translateX: '5px'}}
        whileTap={{ scale: 0.9 }}
        onClick={toggleModal}
        className='flex items-center justify-center gap-2 border py-2 px-4 rounded-t-3xl rounded-bl-3xl bg-white/10 backdrop-blur-sm cursor-pointer'
      >
        <motion.span
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {icon}
        </motion.span>
        <span className='text-sm'>{btnText}</span>
      </motion.button>
      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen &&

          <Modal handleClose={toggleModal} type={dropIn}>
            {children}
          </Modal>

        }
      </AnimatePresence>
    </>
  );
};

export default DropInModals;

