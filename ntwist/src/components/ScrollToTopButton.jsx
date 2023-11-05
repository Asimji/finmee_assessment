import React, { useState, useEffect } from 'react';
import {  Box } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box display={showButton ? 'block' : 'none'} position="fixed" bottom="3rem" right="1rem" cursor={'pointer'} 
    
    >
    
    <ChevronUpIcon onClick={scrollToTop} bgColor='#08234d' boxSize={'8vh'} color={'#ffff'} style={{borderRadius:'50%'}}/>
 
</Box>
  );
};

export default ScrollToTopButton;
