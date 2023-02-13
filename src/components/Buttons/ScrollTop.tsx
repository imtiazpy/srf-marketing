import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import styled from 'styled-components';


const ScrollTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true)
    } else if (scrolled < 500 ) {
      setVisible(false)
    }
  }

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)

    return (() => {
      window.removeEventListener('scroll', toggleVisible)
    })

  }, [])

  return (
    <ButtonTop 
      onClick={handleScrollTop}
      className={`${!visible ? 'hidden' : 'bottom-10 right-10'} fixed bg-red-500 p-4 z-40 rounded-md text-white`}
    >
      <Link
        href='/#hero-section'
        scroll={false}
      >
        <FaAngleUp />
      </Link>
    </ButtonTop>
  );
};

export default ScrollTop;

const ButtonTop = styled.button`

`