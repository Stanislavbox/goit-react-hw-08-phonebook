import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Input, Heading, ChakraProvider } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value.toLocaleLowerCase()));
  };

  return (
    <ChakraProvider>
      <Heading as="h2" size="md" mb={4}>
        Contacts
      </Heading>
      <Input
        id="outlined-basic"
        placeholder="Find Contact by name"
        variant="outline"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </ChakraProvider>
  );
};
