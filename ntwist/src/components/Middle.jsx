import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import iStock1 from "../images/iStock-1.jpeg"
import iStock2 from "../images/iStock-2.jpeg"

const Middle = () => {
    const customStyles = {
        fontFamily: 'Roboto,sans-serif',
      };
  return (
    <Box mt={'5vh'}>
        {/* Box 1 Start */}
       <Flex pr={'8vh'}>
        <Box p={'6vh'} w={'100%'}>
            <Heading textColor={'#FF3A2D'}
             fontWeight={'400px'} lineHeight={'28px'} fontFamily={customStyles}

            >
            Mine-To-Mill-To-Mine <hr /> Optimization
            </Heading>
            <Text font-family= 'Heading Font Name' textAlign={'justify'} mt={'5vh'}>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans</Text>
            <Button bgColor={'#FF3A2D'} mt={'5vh'}>Read More</Button>
        </Box>
        <Box w={'90%'}>
            <Image  src={iStock1} alt='iStock1' w={'100%'} />
        </Box>
       </Flex>
       {/* Box 1 End */}

       {/* Box 2 Start */}
       <Flex pl={'6vh'} mt={'5vh'}> 
        <Box w={'90%'}>
            <Image w={'100%'} src={iStock2} alt='iStock2' />
        </Box>
        <Box p={'6vh 8vh 6vh 6vh'} w={'90%'}>
            <Heading textColor={'#FF3A2D'}
             fontWeight={'400px'} lineHeight={'28px'} fontFamily={customStyles}

            >
            Sustainability
            </Heading>
            <Text font-family= 'Heading Font Name' textAlign={'justify'} mt={'5vh'}>
            Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
 <br />
 <br />
           With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
            </Text>
            <Button bgColor={'#FF3A2D'} mt={'5vh'}>Read More</Button>
        </Box>
       </Flex>
       {/* Box 2 End */}
    </Box>
  )
}

export default Middle
