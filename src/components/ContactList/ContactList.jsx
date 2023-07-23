import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  UnorderedList,
  Alert,
  AlertIcon,
  ChakraProvider,
} from '@chakra-ui/react';
import { Contact } from 'components/Contact/Contact';
import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  selectError,
  selectIsloading,
  selectVisibleContacts,
} from 'redux/contacts/contactsSelectors';

export const ContactList = () => {
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ChakraProvider>
      {isLoading && <Loader />}
      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          Please authenticate
        </Alert>
      )}
      <UnorderedList listStyleType="none">
        {contacts.map(({ id, name, number }) => (
          <Contact name={name} number={number} id={id} key={id} />
        ))}
      </UnorderedList>
    </ChakraProvider>
  );
};
