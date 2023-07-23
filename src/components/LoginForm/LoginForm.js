import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  ChakraProvider,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit} autoComplete="off">
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" />
          </FormControl>
          <Button type="submit">Log In</Button>
        </VStack>
      </form>
    </ChakraProvider>
  );
};
