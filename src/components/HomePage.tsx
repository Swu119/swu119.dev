import RepoFetch from './RepoFetch';
import Header from './Header';
import { Box } from '@chakra-ui/react';

const HomePage = () => {
  const username = 'Swu119';

  const scrollContainer = document.getElementById('scroll-container');
  const colors = ['red', 'green', 'blue']; // Array of background colors

  document.addEventListener('scroll', function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    const colorIndex = Math.floor(scrollPercentage / (100 / colors.length));
    const backgroundColor = colors[colorIndex];
    console.log(backgroundColor);

    scrollContainer!.style.backgroundColor = backgroundColor;
  });

  return (
    <Box
      id='scroll-container'
      height={'1000px'}
      transition={'background-color 0.3s ease'}
    >
      <Header />
      <Box display={'flex'}>
        <RepoFetch username={username} />
        <Box width={'100%'}> what </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
