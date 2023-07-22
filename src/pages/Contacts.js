import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";


const ContactsPage = () => {
  // const isLoading = useSelector(selectLoading)
  return (
    <section style={{paddingTop: 40}}>
      <container style={{padding:'0, 60'}}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </container>
    </section>
  );
};

export default ContactsPage;