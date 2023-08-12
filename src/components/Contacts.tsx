import { Box } from '@chakra-ui/react';
import Wave from '../assets/download.svg';

function Contacts() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      width={'100%'}
      height={'500px'}
      fontFamily={'lilita'}
      fontWeight={'bold'}
      fontSize={'50px'}
      padding={'100px'}
      backgroundImage={Wave}
      backgroundColor={'#abffff'}
      color={'#90b0f8'}
    >
      Wanna talk? I'm all ears.
    </Box>
  );
}

export default Contacts;
