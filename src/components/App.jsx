import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Container } from './Container/Container';
import  ContactForm  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';
import  Filter  from './Filter/Filter';
import  NoContactsMessage  from './NoContactsMessage/NoContactsMessage';
import { selectIsLoading, selectError, selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';



export function App() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter />
        )}
        {isLoading && !error && (
         <p>Please wait...</p>
        )}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <NoContactsMessage />
        )}
      </Container>
    );
}