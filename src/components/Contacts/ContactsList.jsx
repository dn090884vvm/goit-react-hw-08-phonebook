import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { List } from './ContactsList.styled';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import Filter from 'components/Filter/Filter';
import Addcontact from 'components/Addcontact/Addcontacts';
import ContactsItem from './ContactsItem';
import { Wrapper } from './ContactsList.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContact());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);
  const filterWord = useSelector(state => state.contacts.filter);

  const gettedContacts = contacts;

  const getFilteredContacts = () => {
    const normalizedFilter = filterWord.toLowerCase();

    return gettedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Wrapper>
      <Addcontact />
      <Filter />{' '}
      <List>
        {contacts &&
          getFilteredContacts().map(contact => (
            <ContactsItem key={contact.id} contact={contact}></ContactsItem>
          ))}
      </List>
    </Wrapper>
  );
}
