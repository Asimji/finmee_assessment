import { Box, Button, Collapse, Flex, IconButton, Image, Text, VStack, keyframes, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import logoBlue from '../images/ntwist-logo.png'
import logoWhite from '../images/ntwistlight.png'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


  const customStyles = {
    fontFamily: 'Inter, sans-serif',
  };

const underline= keyframes`
  0% {
      width: 0;
    }
    100% {
      width: 100%;
    }  
`
const animation = `${underline} 0.3s forwards`
  

const Navbar = () => {

    const [scrolling,setScrolling]=useState(false)
    const { isOpen, onToggle } = useDisclosure();

    const scrollDown=()=>{
        if(window.scrollY>0){
            setScrolling(true)
        }
        else{
            setScrolling(false)
        }
    }
    useEffect(()=>{
          window.addEventListener('scroll',scrollDown)

          return ()=>{
            window.removeEventListener('scroll',scrollDown)
          }
    },[])

 const backgroundColor =scrolling ? "#ffff" : 'none'
 const TextColor=scrolling ? "#1D507F" : "#ffff"
const ImageColor=scrolling ? logoBlue : logoWhite

const CustomDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <Box
        position="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        fontSize={'18px'} fontWeight={'500'} lineHeight={'28px'}
      >
        <Button onClick={toggleDropdown} variant="outline" size="sm"  fontSize={'18px'} fontWeight={'500'} lineHeight={'28px'}
        textColor={TextColor}
        border={'none'}
         >
          Industries &#9660;
        </Button>
        {isOpen && (
          <Box
            position="absolute"
            top="80%"
            left="0"
            width="300px"
            bg="white"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
            zIndex="1"
            p={'2rem'}
            textColor={scrolling ? '#1D507F' : 'black'}
          >
            <Text>Sustainability</Text>
            <Text mt={'3vh'}>Mineral Processing</Text>
            <Text mt={'3vh'}>Mine-To-Mili-To-Mine <br /> Optimisation</Text>
            <Text mt={'3vh'}>Oil & Gas</Text>
          </Box>
        )}
      </Box>
    );
  };


  return (
    <Flex justifyContent="space-between"  background={backgroundColor}
    h={'12vh'} p={'2vh 8vh 0 6vh'} 
    
    >
    <Box w={'25vh'} >
      <Image src={ImageColor} w={{lg:'90%',base:'60%'}} />
    </Box>

    <Flex gap={'4vh'} justifyContent="space-between" 
    fontSize={'18px'} fontWeight={'500'} lineHeight={'28px'} style={customStyles}
    mt={'1.5vh'}  cursor={'pointer'} display={{lg:'flex',base:'none'}}
    >
      <Text textColor={TextColor}>Home</Text>
      <CustomDropdown/>
      <Text textColor={TextColor}>AI Software</Text>
      <Text textColor={TextColor}>Blogs</Text>
      <Text textColor={TextColor}>Contact Us</Text>
    </Flex>
    <Box display={{ base: 'block', lg: 'none' }} >
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize={'25px'}/>}
            variant="ghost"
            onClick={onToggle}
          />
        </Box>
       
  </Flex>
  )
}

export default Navbar
