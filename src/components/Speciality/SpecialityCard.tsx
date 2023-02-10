import React from 'react';
import Icon from '../common/Icon';
import styled from 'styled-components';

export interface ISpecialityCard extends React.ComponentPropsWithoutRef<'div'> {
  icon: string;
  count: number;
  content: string;
}


const SpecialityCard: React.FC<ISpecialityCard> = ({ icon, count, content, className, ...divProps }) => {
  return (
    <Card>
      <div className={`card__content md:mt-4`}>
        <div>{<Icon iconName={icon} />}</div>
        <p className='text-3xl font-bold'>{count}+</p>
        <p>{content}</p>
      </div>
    </Card>
  );
};

export default SpecialityCard;


const Card = styled.div`
  position: relative;
  perspective: 800px;
  width: 100%;
  height: 100%;
  color: white;
  padding: 1rem;

  &:after {
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    content: "";
    z-index: -1;
    transform-style: preserve-3d;
    transform: rotateY(-20deg);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 90%;
    height: 100%;
    cursor: pointer;
  }

  .card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    transform-style: preserve-3d;
    transform: translateZ(2rem);
  }

`