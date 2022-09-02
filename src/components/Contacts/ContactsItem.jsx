// import { ListElement, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import {
  Button,
  ListElement,
  Paragraph,
  DataWrapper,
} from './ContactsItem.styled';

export default function ContactsItem({ contact }) {
  const dispatch = useDispatch();
  const { name, number } = contact;

  return (
    <ListElement>
      <DataWrapper>
        <Paragraph>{name}</Paragraph>
        <Paragraph>{number}</Paragraph>
      </DataWrapper>
      <Button
        onClick={() => {
          dispatch(contactsOperations.deleteContact(contact.id));
        }}
      >
        Delete contact
      </Button>
    </ListElement>
  );
}
