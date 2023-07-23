import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsloading } from 'redux/contacts/contactsSelectors';

export const ContactPage = () => {
  const isLoading = useSelector(selectIsloading);

  return (
    <>
      {isLoading && <Loader />}
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};
