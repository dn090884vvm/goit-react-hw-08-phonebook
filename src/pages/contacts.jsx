import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { contactsOperations } from 'redux/contacts/contacts-operations';
import Filter from 'components/Filter/Filter';
import Addcontact from 'components/Addcontact/Addcontacts';

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
  // console.log('this is after pushing', contacts);

  return (
    <div>
      <Addcontact />
      <Filter />{' '}
      <ul>
        {contacts &&
          getFilteredContacts().map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button
                type="button"
                onClick={() => {
                  dispatch(contactsOperations.deleteContact(contact.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
      {/* <button
        type="button"
        onClick={() => dispatch(contactsOperations.getContact())}
      >
        {' '}
        get contacts
      </button> */}
    </div>
  );
}

// export default function Contacts() {
//   const [contacts, setContacts] = useState();

//   const dispatch = useDispatch();
//   const getContacts = createAsyncThunk('', async () => {
//     try {
//       const { data } = await axios.get('/contacts');
//       // console.log(data);
//       setContacts(data);
//       return data;
//     } catch (error) {}
//   });

//   const addContact = createAsyncThunk('', async () => {
//     try {
//       const newcontact = { name: 'voha', email: '1234567' };
//       await axios.post('/contacts', newcontact);

//       // return data;
//     } catch (error) {}
//   });
//   console.log(contacts);
//   return (
//     <div>
//       <button type="button" onClick={() => dispatch(getContacts())}>
//         {' '}
//         get your contacts
//       </button>
//       <button type="button" onClick={() => dispatch(addContact())}>
//         {' '}
//         add contact
//       </button>
//       {contacts && (
//         <ul>
//           {contacts.map(contact => (
//             <li key={contact.id}>
//               <p>{contact.name}</p>
//               <p>{contact.number}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
