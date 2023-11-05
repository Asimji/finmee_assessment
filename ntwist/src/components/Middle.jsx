import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import iStock1 from "../images/iStock-1.jpeg"
import iStock2 from "../images/iStock-2.jpeg"
import iStock3 from "../images/iStock-3.jpeg"
import iStock4 from "../images/iStock4.png"

import './All.css'

const Middle = () => {
    const customStyles = {
        fontFamily: 'Roboto,sans-serif',
      };
  return (
    <Box mt={'5vh'}>
        {/* Box 1 Start */}
       <Flex pr={{lg:'8vh'}} direction={{lg:'row',base:'column'}}>
        <Box p={'6vh'} w={'100%'}>
            <Heading textColor={'#FF3A2D'}
             fontWeight={500} lineHeight={'28px'} fontFamily={customStyles}
             fontSize={'7vh'}
             className='heading'
            >
            Mine-To-Mill-To-Mine <br /><br /> Optimization
            </Heading>
            <Text font-family={customStyles} textAlign={'justify'} mt={'5vh'}
            fontWeight={400} lineHeight={'27px'}
            className='heading'
            >NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans</Text>
            <Button bgColor={'#FF3A2D'} textColor={'white'} mt={'5vh'}>Read More</Button>
        </Box>
        <Box w={{lg:'90%',base:'100%'}}>
            <Image  src={iStock1} alt='iStock1' w={'100%'} />
        </Box>
       </Flex>
       {/* Box 1 End */}

       {/* Box 2 Start */}
       <Flex pl={{lg:'6vh'}} mt={'10vh'} direction={{lg:'row',base:'column'}} > 
        <Box w={{lg:'90%',base:'100%'}} >
            <Image w={'100%'} h={'100%'} src={iStock2} alt='iStock2' />
        </Box>
        <Box p={'6vh 8vh 6vh 6vh'} w={'90%'}>
            <Heading textColor={'#FF3A2D'}
             fontWeight={500} lineHeight={'28px'} fontFamily={customStyles}
             fontSize={'7vh'}
             className='heading'
            >
            Sustainability
            </Heading>
            <Text  font-family={customStyles} textAlign={'justify'} mt={'5vh'}
            fontWeight={400}  className='heading'>
            Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
 <br />
 <br />
 
           With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
            </Text>
            <Button bgColor={'#FF3A2D'} mt={'2vh'} textColor={'white'}>Read More</Button>
        </Box>
       </Flex>
       {/* Box 2 End */}

{/* Box 3 Start */}

<Flex pr={{lg:'8vh'}} direction={{lg:'row',base:'column'}}  mt={'10vh'}>
        <Box p={'6vh'} w={'100%'}>
            <Heading textColor={'#FF3A2D'}
            fontWeight={500} lineHeight={'28px'} 
            className='heading'
            fontSize={'7vh'}
         
            >
            Mineral Processing
            </Heading>
            <Text 
             textAlign={'justify'} mt={'5vh'}
            fontWeight={400}  className='heading'
            >
            NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.
            </Text>
            <Button bgColor={'#FF3A2D'} textColor={'white'} mt={'5vh'}>Read More</Button>
        </Box>
        <Box w={{lg:'90%',base:'100%'}}>
            <Image  src={iStock3} alt='iStock1' w={'100%'} />
        </Box>
       </Flex>

{/* Box 3 End */}

{/* Box 4 Start */}

<Flex pl={{lg:'6vh'}} mt={'10vh'} direction={{lg:'row',base:'column'}}> 
        <Box w={{lg:'90%',base:'100%'}}>
            <Image w={'100%'} src={iStock4} alt='iStock2' />
        </Box>
        <Box p={'6vh 8vh 6vh 6vh'} w={'90%'}>
            <Heading textColor={'#FF3A2D'}
              fontWeight={400} lineHeight={'28px'} 
              fontSize={'7vh'}
              className='heading'
            >
            Oil & Gas
            </Heading>
            <Text font-family={customStyles} textAlign={'justify'} mt={'5vh'}
            fontWeight={400}  className='heading'>
            Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. 
            <br />
            <br />
            NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.
            </Text>
            <Button bgColor={'#FF3A2D'} mt={'2vh'} textColor={'white'}>Read More</Button>
        </Box>
       </Flex>
{/* Box 4 End */}

    </Box>
  )
}

export default Middle
