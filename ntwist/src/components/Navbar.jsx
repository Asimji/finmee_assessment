import { Box, Button, Flex, IconButton, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import logoBlue from '../images/ntwist-logo.png'
import logoWhite from '../images/ntwistlight.png'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import './All.css'


  const customStyles = {
    fontFamily: 'Inter, sans-serif',
  };


  

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
          <Box  as="span" position="relative">
          <Button onClick={toggleDropdown} variant="outline" size="sm"  fontSize={'16px'} fontWeight={'500'} lineHeight={'28px'}
        textColor={TextColor}
        border={'none'}
        pb={'0.5vh'}
        className='heading'
        _hover={{
          bgColor:'none'
        }}
         >
          Industries <span style={{fontSize:'10px',marginLeft:'1vh'}}>&#9660;</span>
        </Button>
              <span
                className="selecting-ind"
              />
          </Box>
      
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
           <Box  as="span" position="relative">
            <Text  _hover={{
              cursor: 'pointer',
               }}
              >Sustainability</Text>
              <span
                className="selecting"
              />
          </Box>
      <Box  as="span" position="relative">
      <Text  mt={'3vh'} _hover={{
       cursor: 'pointer',
      }}
       >Mineral Processing</Text>
      <span
         className="selecting-min"
      />
      </Box>
      <Box  as="span" position="relative">
      <Text mt={'3vh'} _hover={{
       cursor: 'pointer',
      }}
       >Mine-To-Mili-To-Mine <br /> Optimisation</Text>
      <span
        className="selecting"
      />
      </Box>
      <Box  as="span" position="relative">
      <Text  mt={'3vh'} _hover={{
       cursor: 'pointer',
      }}
       >Oil & Gas</Text>
      <span
         className="selecting-oil"
      />
      </Box>
          
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
      <Image src={ImageColor} w={{lg:'80%',base:'60%'}} />
    </Box>

    <Flex gap={'4vh'} justifyContent="space-between" 
    fontSize={'16px'} fontWeight={'500'} lineHeight={'28px'} style={customStyles}
    mt={'1.5vh'}  cursor={'pointer'} display={{lg:'flex',base:'none'}}
    className='heading'
    >
<Box  as="span" position="relative">
      <Text textColor={TextColor} _hover={{
       cursor: 'pointer',
      }}
       >Home</Text>
      <span
        className="underline"
      />
      </Box>
         <CustomDropdown/> 
         <Box  as="span" position="relative">
      <Text textColor={TextColor}
     _hover={{
       cursor: 'pointer',
      }}
    
      >AI Software</Text>
      <span
        className="underline"
      />
      </Box>
      <Box  as="span" position="relative">
      <Text textColor={TextColor} _hover={{
       cursor: 'pointer',
      }}
       >Blogs</Text>
      <span
        className="underline"
      />
      </Box>
      <Box  as="span" position="relative">
      <Text textColor={TextColor} _hover={{
       cursor: 'pointer',
      }}
       >Contact Us</Text>
      <span
        className="underline"
      />
      </Box>
     
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
