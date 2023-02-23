import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneVolume, FaEnvelopeOpen, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> { }

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {

  const iconStyle = { border: '1px solid blue', borderRadius: '50%', padding: '5px', fontSize: '28px' }

  return (
    <FooterSection className='px-2 sm:px-5 md:px-10 pt-10 md:pt-20 pb-5 bg-black/80'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className='flex flex-col gap-4'>
          <h1 className=" font-bold text-xl cursor-pointer">
            <Link href="/" scroll={false} className='uppercase text-sm xs:text-base sm:text-xl'>
              Marketing<span className="text-[#01be96]">Agency</span>
            </Link>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam quisquam, molestias rerum similique consequatur rem reprehenderit culpa distinctio ipsum?</p>
          <div className={`icons flex gap-4`}>
            <FaTwitter
              className='icon'
              style={iconStyle}
            />
            <FaInstagram
              className='icon'
              style={iconStyle}
            />
            <FaFacebookF
              className='icon'
              style={iconStyle}
            />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='uppercase text-sm xs:text-base sm:text-xl'>Links</h4>
          <ul>
            <li>About us</li>
            <li>Our Projects</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className='uppercase text-sm xs:text-base sm:text-xl'>Contact information</h4>
          <p>Feel free to contact & reach us!</p>
          <p className='flex items-center gap-2'><FaMapMarkerAlt className='inline' /> Dhaka, Bangladesh</p>
          <p className='flex items-center gap-2'><FaPhoneVolume className='inline' /> +880 184 003 1414</p>
          <p className='flex items-center gap-2'><FaEnvelopeOpen className='inline' /> info@xyz.com</p>
        </div>
      </div>
      <div>
        <hr />
        <p className=' mt-4 text-sm text-center'>Copyright © 2022 MARKETINGAGENCY. All rights reserved.</p>
      </div>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  position: relative;
  height: auto;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-image:
    /* top, transparent red */
    linear-gradient(rgba(0, 0, 0, 0.65), rgba(10, 0, 0, 0.65)),
    /* your image */
    url('/WorldMap.svg');
  min-height: 400px;
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .icon {
    transition: all 0.5s ease;
    &:hover {
      color: white;
      background-color: red;
      cursor: pointer;
      transform: scale(1.4);
    }
  }
`