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
    >
      <Header navids={['github', 'super', 'fun']} />
      <Box id={'education'}>Graduate</Box>
      <Box
        id={'github'}
        position={'relative'}
        display={'flex'}
      >
        <RepoFetch username={username} />
        <Intro />
      </Box>
    </Box>
  );
};

export default HomePage;
