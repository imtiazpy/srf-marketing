import React from 'react';
import styled from 'styled-components';

export interface IBurgerButton extends React.ComponentPropsWithRef<'div'>{
  isOpen: Boolean;
  toggleOpen: () => void;
}

const BurgerButton: React.FC<IBurgerButton> = ({ className, isOpen, toggleOpen, ...divProps }) => {
  return (
    <Button isOpen = {isOpen} onClick={toggleOpen}>
      <div />
      <div />
      <div />
    </Button>
  );
};

export default BurgerButton;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1000;
  &:hover{
    cursor: pointer;
  }

  div{
    width: 1.5rem;
    height: 0.2rem;
    background-color: white;
    border-radius: 2rem;
    transition: all 0.3s ease;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({isOpen}: {isOpen: Boolean;}) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({isOpen}: {isOpen: Boolean;}) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({isOpen}: {isOpen: Boolean;}) => isOpen ? 0 : 1 };
    }

    &:nth-child(3) {
      transform: ${({isOpen}: {isOpen: Boolean;}) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`