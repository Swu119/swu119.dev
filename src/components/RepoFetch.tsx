import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import RepoCard from './RepoCard';

const RepoFetch = ({ username }: { username: string }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Text
        fontFamily={'lilita'}
        fontWeight={'bold'}
        fontSize={'2xl'}
        paddingLeft={'30px'}
      >
        Project Panel
      </Text>
      <Box>
        {repos.map((repo, idx) => (
          <RepoCard
            key={idx}
            repo={repo}
          />
        ))}
      </Box>
    </Box>
  );
};

RepoFetch.propTypes = {
  username: PropTypes.string.isRequired,
};

export default RepoFetch;
