// import { ListElement, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import { Button, ListElement } from './ContactsItem.styled';

export default function ContactsItem({ contact }) {
  const dispatch = useDispatch();
  const { name, number } = contact;

  return (
    <ListElement>
      <p>{name}</p>
      <p>{number}</p>
      <Button
        onClick={() => {
          dispatch(contactsOperations.deleteContact(contact.id));
        }}
      >
        Delete
        {/* {deleting ? 'Deleting..' : 'Delete'} */}
      </Button>
    </ListElement>
  );
}
