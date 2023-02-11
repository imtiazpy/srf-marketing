import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export interface ITestimonialCard extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  name: string;
  designation: string;
  company: string;
  testimonial: string;
}


const TestimonialCard: React.FC<ITestimonialCard> = ({ image, name, designation, company, testimonial, className, ...divProps }) => {
  return (
    <>
      <Card>
        <div  className='quote'>
          <span><FaQuoteRight /></span>
        </div>
        <Body>
          {testimonial}
        </Body>
        <Footer>
          <div className='img'>
            <Image className='img-comp' src={image} alt={name} fill sizes={'100'} />
          </div>
          <div className="details">
            <h1>{name}</h1>
            <p>{designation}, {company}</p>
          </div>
        </Footer>
      </Card>
    </>
  );
};

export default TestimonialCard;

const Card = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1.5rem;
  margin: 0 1rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  cursor: pointer;

  .quote {
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 1.8rem;
    color: #01be96;
    opacity: 0.7;
  }
`

const Body = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
  color: #fff;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  .img{
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    position: relative;
  }
  .img-comp {
    border-radius: 50%;
  }

  h1{
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
  }

  p{
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.500);
  }
`