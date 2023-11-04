import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import home from '../images/home-image.png'
import Middle from './Middle'

const Homepage = () => {
    const customStyles = {
        fontFamily: 'Inter',
      };
  return (
    <Box >

        {/* Navbar */}
        <Box position={'fixed'} w={'100%'} zIndex={5} >
        <Navbar/>
        </Box>
        {/* Navbar end */}

        <Box>
            <Box >
            <Image src={home}/>
            </Box>
            <Box  
            >

            
            <Flex justifyContent={'space-between'} position={'absolute'} top={'10%'} alignItems={'center'}
            p={'0 8vh 0 6vh'}
            >
            <Box w={'50%'} color={'#ffff'}>
                <Text fontSize={{lg:'41px',md:'30px',sm:'20px',base:'10px'}} lineHeight={{sm:'41px',base:'20px'}} fontWeight={700}>Data-Powered solutions <br /> for Industril Excellence</Text>
                <button mt={'2vh'} fontSize={{ base: '8px', sm: '12px', md:'14px',lg: '16px',}}
                bg={'blue'} textColor={'#ffff'} _hover={'none'}
                style={{width:'15vw',height:'7vh',marginTop:'2vh',background:'#007AFF',fontSize:'3vh',lineHeight:'3.5185vh',color:'#ffff',fontFamily:{customStyles},fontWeight:'500px'}}
                >Read More</button>
            </Box>
            <Box w={'60%'} mt={'5vh'}>
                <Image src='https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png' alt='connect' w={'100%'}/>
            </Box>
            </Flex>
            </Box>
           
        </Box>
     {/* Middle Content */}
     <Box>
               <Middle/>
     </Box>
     {/* Middle Content */}
     
    </Box>
  )
}

export default Homepage
