// import { ListElement, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import { Button, ListElement, Paragraph } from './ContactsItem.styled';

export default function ContactsItem({ contact }) {
  const dispatch = useDispatch();
  const { name, number } = contact;

  return (
    <ListElement>
      <Paragraph>{name}</Paragraph>
      <Paragraph>{number}</Paragraph>
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
