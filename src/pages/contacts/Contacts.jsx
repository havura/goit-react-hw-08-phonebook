import { useEffect } from 'react';
import { ContactList } from 'components/contact/ContactList';
import { Filter } from 'components/filter/Filter';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operationContacts';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from '../../components/contactForm/ContactForm';





const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
    //  eslint-disable-next-line
  }, [isLoggedIn]);

  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ width: '450px', margin: '0 auto' }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        <ContactList contacts={filterContactsList} />
      ) : (
        <p>Your contacts list is empty</p>
      )}
    </div>
  );
};
export default Contacts;
