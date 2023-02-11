import React from 'react';
import styled from 'styled-components';

export interface IContactUs extends React.ComponentPropsWithoutRef<'section'> { }


const ContactUs: React.FC<IContactUs> = ({ className, ...sectionProps }) => {
  return (
    <Container className='h-auto px-2 sm:px-5 md:px-10 py-10 md:py-20 bg-slate-100'>
      <Grid className='flex flex-col md:flex-row justify-between gap-8'>
        <Left>
          <div className="flex flex-col gap-4">
            <h1 className='text-4xl font-bold text-black order-2'>Ready to work with us?</h1>
            <span className="green">Let's Collaborate</span>
          </div>
          <SubscribeForm>
            <input className='p-4 rounded-lg outline-none w-[100%]' type="text" placeholder='Subscribe to Weekly Newsletter' />
            <button type='submit' className='py-2 px-10 bg-[#01be96] rounded-lg'>Subscribe</button>
          </SubscribeForm>
        </Left>
        <Right>
          <div className='inner'>
            <p className='text-black/90'>Want to collaborate?</p>
            <div>
              <p className='text-gray-600'>Work with us</p>
              <p className='font-bold'>collab@xyzagency.com</p>
            </div>
            <p className='text-black/90'>Want to get on board?</p>
            <div>
              <p className='text-gray-600'>Become a teammate</p>
              <p className='font-bold'>career@xyzagency.com</p>
            </div>
          </div>
          <div className='inner'>
            <p className='text-black/90'>Want to say hello?</p>
            <div>
              <p className='text-gray-600'>General inquiries</p>
              <p className='font-bold'>hello@xyzagency.com</p>
            </div>
          </div>
        </Right>
      </Grid>
    </Container>
  );
};

export default ContactUs;

const Container = styled.section`
`

const Grid = styled.div`
  
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 8rem;
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`