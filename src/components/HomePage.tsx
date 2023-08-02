import Header from './Header';
import RepoFetch from './RepoFetch';
import Intro from './Intro';
import Background from './Background';
import { Box } from '@chakra-ui/react';

const HomePage = () => {
  const username = 'Swu119';

  return (
    <Box
      id='scroll-container'
      height={'100%'}
      transition={'background-color 0.3s ease'}
      backgroundColor={'#abffff'}
    >
      <Header navids={['about me', 'github', 'contact']} />
      <Box
        paddingTop={'50px'}
        id={'about me'}
      >
        <Intro />
      </Box>
      <Box
        id={'github'}
        position={'relative'}
        display={'flex'}
        zIndex={'1'}
      >
        <RepoFetch username={username} />
      </Box>
    </Box>
  );
};

export default HomePage;
