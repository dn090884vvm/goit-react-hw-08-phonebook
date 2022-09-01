import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

const getContact = createAsyncThunk('contacts/getcontact', async () => {
  try {
    const { data } = await axios.get('/contacts');
    // console.log('this is data', data);

    return data;
  } catch (error) {
    // console.log(error.response.request.response);
    // alert(error.response.request.response);
  }
});

const addContact = createAsyncThunk('contacts/addcontact', async newcontact => {
  const { data } = await axios.post('/contacts', newcontact);
  //   console.log(data);
  return data;
});

const deleteContact = createAsyncThunk(
  'contacts/deletecontact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);

    return contactId;
  }
);

export const filter = createAction('contacts/filter');

export const contactsOperations = {
  getContact: getContact,
  addContact: addContact,
  deleteContact: deleteContact,
  filter: filter,
};
// const getContacts = () => async dispatch => {
//   dispatch(fetchContactsrequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };
// const addContact = (name, number) => dispatch => {
//   const newContact = {
//     name: name,
//     number: number,
//   };

//   dispatch(addContactRequest());

//   axios
//     .post('/contacts', newContact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error.message)));
// };

// const deleteContact = contactId => dispatch => {
//   dispatch(deleteContactrequest());

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch(error => dispatch(deleteContactError(error.message)));
// };

// const toggleComplited = () => async dispatch => {
//   const update = { completed };

//   dispatch(toggleComplitedRequest());

//   axios
//     .patch(`/contacts/${id}`, update)
//     .then(({ data }) => dispatch(toggleComplitedSuccess(data)))
//     .catch(error => dispatch(toggleComplited(error.message)));
// };

// const contactsOperations = {
//   getContacts: getContacts,
//   addContact: addContact,
//   deleteContact: deleteContact,
//   toggleComplited: toggleComplited,
// };

// export default contactsOperations;
