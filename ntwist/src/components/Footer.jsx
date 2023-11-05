import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../images/ntwistlight.png'
import { Icon } from '@chakra-ui/react'
import { CiTwitter } from "react-icons/ci";
import {CiLinkedin } from "react-icons/ci";
import './All.css'

const Footer = () => {
  const customStyles = {
    fontFamily: 'Roboto,sans-serif',
  };


  return (
    <Flex bg={'#081528'} direction={'column'} justifyContent={'center'} alignItems={'center'} mt={'8vh'}
    p={'5vh 0 8vh 0'}
    >
           <Box w={'10%'}>
            <Image src={logo} alt='logo' w={'100%'}/>
           </Box>
           <Flex textColor={'#ffff'} fontFamily={customStyles} fontSize={'16px'} fontWeight={400}
           gap={'5vh'} m={'2vh 0 5vh 0'}
           className='heading'
           >
            <Text>Home</Text>
            <Text>About Us</Text>
            <Text>Contact Us</Text>
            <Text>Privace Policy</Text>
            <Text>Sitemap</Text>
           </Flex>
       <Text  className='heading' textColor={'#6f7f92'} fontSize={'16px'} >9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</Text>
       <Flex color={'#ffff'} gap={'5vh'}  m={'5vh 0 5vh 0'} fontSize={'2vh'}>
        <Icon as={CiTwitter} 
          boxSize={'6vh'} 
          transform="scale(0.7)"
          _hover={{
           boxShadow: 'dark-lg',
           bgColor: '#6f7f92', 
           cursor: 'pointer' }}
        />
        <Icon as={CiLinkedin}
         boxSize={'6vh'} 
         transform="scale(0.7)"
         _hover={{
          boxShadow: 'dark-lg',
          bgColor: '#6f7f92', 
          cursor: 'pointer' }}
        />
       </Flex>
       <Text  className='heading' textColor={'#6f7f92'}>© 2022. Ntwist Inc.</Text>
    </Flex>
  )
}

export default Footer
