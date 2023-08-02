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
      <Text
        className='intro'
        color={'black'}
        fontWeight={'bold'}
        fontSize={'3xl'}
        textAlign={'center'}
        lineHeight={'50px'}
        fontFamily={'lilita'}
        position={'relative'}
        zIndex={'2'}
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
        zIndex={'1'}
      >
        <FaSun
          id='sun'
          color='#ffd74e'
          size={'40%'}
        />
      </Box>
      <Box
        position={'absolute'}
        bgSize={'500%'}
        boxSize={'140px'}
        left={'48%'}
        top={'28%'}
        zIndex={'1'}
        backgroundColor={'#abffff'}
      ></Box>
    </Box>
  );
}

export default Intro;
