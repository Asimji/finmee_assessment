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

{/* Home Image Section Start */}
        <Box>
            <Box >
            <Image src={home}/>
            </Box>
            <Box  
            > 
            <Flex justifyContent={'space-between'} position={'absolute'} top={{lg:'3%',md:'5%',base:'5vh'}} alignItems={'center'}
            p={'0 8vh 0 6vh'}
            >
            <Box w={'50%'} color={'#ffff'}>
                <Text fontSize={{lg:'41px',md:'20px',sm:'20px',base:'10px'}} lineHeight={{sm:'41px',base:'20px'}} fontWeight={'bold'}>Data-Powered solutions <br /> for Industril Excellence</Text>
                <Button w={'12vw'} h={{lg:'7vh',md:'5vh'}} mt={'5vh'} bgColor={'#007AFF'} fontSize={{lg:'2.5vh',md:'1.5vh',base:'1vh'}} lineHeight={'3.5185vh'} textColor={'#ffff'} fontFamily={customStyles} fontWeight={'bold'}
                >Read More</Button>
            </Box>
            <Box w={'60%'} mt={'5vh'}>
                <Image src='https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png' alt='connect' w={'100%'}/>
            </Box>
            </Flex>
            </Box>
           
        </Box>
{/* Home Image Section End */}

     {/* Middle Content Start*/}
     <Box>
               <Middle/>
     </Box>
     {/* Middle Content End */}
     
     {/* Footer Start */}
     <Footer/>
     {/* Footer End */}
    </Box>
  )
}

export default Homepage
