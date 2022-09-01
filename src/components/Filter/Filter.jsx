import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contacts-operations';

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.contacts.filter);
  const handleImput = e => {
    dispatch(contactsOperations.filter(e.target.value));
  };
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="search" value={value} onChange={handleImput} />
    </label>
  );
}
