

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import  ContactForm  from 'components/ContactForm/ContactForm';
import  ContactList  from 'components/ContactList/ContactList';
import  Filter  from 'components/Filter/Filter';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading, selectError, selectContacts } from '../redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <p>Please wait...</p>
      )}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </>
  );
};

export default Contacts;