import { Box, HStack, Image } from '@chakra-ui/react';
import Wave from '../assets/download.svg';
import Linkdin from '../assets/linkedin.png';
import Insta from '../assets/instagramlogoresized-1.jpg';
import Gmail from '../assets/gmail.png';
import Faceb from '../assets/Facebook_f_logo_(2021).svg';

function Contacts() {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'space-around'}
      width={'100%'}
      height={'11em'}
      fontFamily={'lilita'}
      fontWeight={'bold'}
      fontSize={'50px'}
      paddingTop={'100px'}
      paddingBottom={'50px'}
      backgroundImage={Wave}
      backgroundColor={'#abffff'}
      color={'#90b0f8'}
    >
      Find me here. Let's build connections.
      <HStack
        width={'70%'}
        height={'60%'}
        justifyContent={'space-around'}
        alignItems={'flex-end'}
      >
        <a href='https://www.linkedin.com/in/sonny-wu-/'>
          <Image
            borderRadius={'full'}
            boxSize={'200px'}
            src={Linkdin}
          ></Image>
        </a>
        <a href={'https://www.instagram.com/_sonny_days/'}>
          <Image
            borderRadius={'full'}
            boxSize={'200px'}
            src={Insta}
          ></Image>
        </a>
        <a href='mailto:sonnydays2001@gmail.com'>
          <Image
            borderRadius={'full'}
            boxSize={'200px'}
            src={Gmail}
          ></Image>
        </a>
        <a href='https://www.facebook.com/sonny.wu1/'>
          <Image
            borderRadius={'full'}
            boxSize={'200px'}
            src={Faceb}
          ></Image>
        </a>
      </HStack>
    </Box>
  );
}

export default Contacts;
