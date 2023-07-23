import { useSelector } from 'react-redux';
import { Box, Heading, ChakraProvider } from '@chakra-ui/react';
import authSelectors from 'redux/auth/auth-selectors';

export const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <ChakraProvider>
      <Box textAlign="center" mt="20">
        {isLoggedIn ? (
          <Heading as="h1" size="xl">
            Welcome to the Phonebook
          </Heading>
        ) : (
          <Heading as="h1" size="xl">
            Welcome
          </Heading>
        )}
      </Box>
    </ChakraProvider>
  );
};
