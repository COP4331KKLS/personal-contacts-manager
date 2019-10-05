import uuid from 'uuid';
import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';

export const getContacts = () =>
{
   return {
      type: GET_CONTACTS
   };
};

export const deleteContact = (uid) =>
{
   return {
      type: DELETE_CONTACT,
      payload: uid
   };
};

export const addContact = (contact) =>
{
   return {
      type: ADD_CONTACT,
      payload: contact
   };
};
