import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';
import './Intro.css';

function Intro() {
  return (
    <Box
      padding={'18px'}
      paddingTop={'50px'}
      width={'100%'}
      position={'relative'}
    >
      <div id='cloud-intro'></div>
      <Text
        className='intro'
        color={'#6c96f5'}
        fontWeight={'bold'}
        fontSize={'3xl'}
        textAlign={'center'}
        lineHeight={'50px'}
        fontFamily={'lilita'}
        position={'relative'}
        zIndex={'4'}
      >
        Hi, I'm <em>Sonny Wu</em>.
        <br />
        I'm a recent computer science graduate who's made a few things.
        <br />
        Check them out below!
      </Text>
      <Box
        position={'absolute'}
        left={'49%'}
        top={'0%'}
        zIndex={'2'}
      >
        <FaSun
          id='sun'
          color='#ffd74e'
          size={'40%'}
        />
        <Box
          position={'absolute'}
          bgSize={'500%'}
          boxSize={'140px'}
          left={'-5%'}
          top={'50%'}
          backgroundColor={'#abffff'}
        ></Box>
      </Box>
    </Box>
  );
}

export default Intro;
