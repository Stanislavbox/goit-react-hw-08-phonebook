import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { selectLoading } from 'redux/auth/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
    console.log('first', contacts)
  const contactsQuery = useSelector(selectFilter);
  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsQuery.toLowerCase())
  );



  return (
    <ul className={css.contact_List}>
      {filterContactsList.length ? (
        filterContactsList.map(contact => (
          <li className={css.contact_item} key={contact.id}>
            {contact.name} - {contact.phone}
            {!isLoading && (
              <button
                type="button"
                className={css.contact_button}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            )}
          </li>
        ))
      ) : (
        <p className={css.contact__message}>No such contact with that name</p>
      )}
    </ul>
  );
};