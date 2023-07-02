import { Center, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Center
      h='100px'
      color='black'
    >
      <Text
        fontSize='2.5em'
        fontWeight='extrabold'
        fontFamily=''
        bgGradient='linear(to-r, #59BFFF, #5979FF)'
        bgClip='text'
      >
        SONNY DAYS FROM NOW ONWARDS!!!
      </Text>
    </Center>
  );
};

export default Header;
