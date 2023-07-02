import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
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
      <ul style={{ overflowY: 'scroll' }}>
        {repos.map((repo, idx) => (
          <RepoCard
            key={idx}
            repo={repo}
          />
        ))}
      </ul>
    </Box>
  );
};

RepoFetch.propTypes = {
  username: PropTypes.string.isRequired,
};

export default RepoFetch;
