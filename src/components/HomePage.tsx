import axios from 'axios';
import { useState } from 'react';

const HomePage = () => {
  const [repos, setRepos] = useState([]);
  const username = 'Swu119';

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return repos;
};

export default HomePage;
