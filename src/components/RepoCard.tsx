import PropTypes from 'prop-types';
import React from 'react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Badge,
  CardFooter,
} from '@chakra-ui/react';

function RepoCard({ repo }: { repo: any }) {
  return (
    <Card
      as='a'
      href={repo.html_url}
      maxW='25%'
      h={'s'}
      display={'inline-block'}
      _hover={{
        background: '#abffff',
      }}
    >
      <CardBody>
        <Image
          src={repo.owner.avatar_url}
          borderRadius='lg'
        />
        <Stack
          h={'120px'}
          mt='3'
          spacing='3'
        >
          <Heading
            h={'50%'}
            fontSize={'1.5vw'}
            size='md'
          >
            {repo.name}
          </Heading>
          <Text
            h={'50%'}
            overflowY={'scroll'}
          >
            {repo.description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter
        justifyContent={'center'}
        flexWrap={'wrap'}
      >
        <Badge
          fontSize={'80%'}
          colorScheme='gray'
        >
          Created: {repo.created_at}
        </Badge>
      </CardFooter>
    </Card>
  );
}

RepoCard.propTypes = {
  repo: PropTypes.any.isRequired,
};

export default RepoCard;
