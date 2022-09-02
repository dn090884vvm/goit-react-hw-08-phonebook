import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contacts-operations';
import { Label, FilterParagraph } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.contacts.filter);
  const handleImput = e => {
    dispatch(contactsOperations.filter(e.target.value));
  };
  return (
    <Label>
      <FilterParagraph>Find contacts by name</FilterParagraph>
      <input type="text" name="search" value={value} onChange={handleImput} />
    </Label>
  );
}
