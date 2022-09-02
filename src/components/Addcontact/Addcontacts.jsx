import { contactsOperations } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  FormParagraph,
  AddContactWrapper,
  Form,
} from './Addcontact.styled';

export default function Addcontact() {
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const target = e.target.elements;

    const isInContacts = contacts.find(
      contact => contact.name.toLowerCase() === target.name.value.toLowerCase()
    );

    if (isInContacts) {
      alert(`${target.name.value} is already in contacts. Please try again`);

      return;
    }

    const formDatas = {
      name: target.name.value,
      number: target.number.value,
    };

    dispatch(contactsOperations.addContact(formDatas));

    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <AddContactWrapper>
      {' '}
      <Form onSubmit={handleSubmit}>
        <FormParagraph>Name</FormParagraph>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <FormParagraph>Number</FormParagraph>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit">Add contact</Button>
      </Form>
    </AddContactWrapper>
  );
}
