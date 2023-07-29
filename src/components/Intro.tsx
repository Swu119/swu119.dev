import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Intro() {
  return (
    <Box
      padding={'18px'}
      width={'100%'}
    >
      <Text
        color={'black'}
        fontWeight={'bold'}
        fontSize={'2xl'}
        textAlign={'center'}
      >
        Welcome to my humble abode. This is the homepage of Sonny Wu, Comp Sci
        graduate at the University of California - Santa Cruz and programmer
        extraodinaire!
      </Text>
    </Box>
  );
}

export default Intro;
