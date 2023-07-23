import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  ChakraProvider,
  Heading,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    const oldContact = contacts.find(contact => contact.name === name.value);

    if (oldContact) {
      toast.error('Sorry, a contact with this name already exists');
      e.target.reset();
      return;
    }

    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };
    e.target.reset();
    dispatch(addContact(contact));
  };

  return (
    <ChakraProvider>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Heading margin={4}>Phonebook</Heading>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="The name can only contain letters, apostrophes, hyphens, and spaces. For example, Иван, Мария Иванова, John Doe"
              required
              variant="outline"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="number">Number</FormLabel>
            <Input
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="The phone number must contain only numbers and may include spaces, hyphens, brackets and may begin with +"
              required
              variant="outline"
              marginBottom={4}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Add contact
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  );
};
