import uuid from 'uuid';
import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actions/types';

const initialState =
{
   contacts:
   [
      {
         uid: uuid(),
         firstName: "Kyle"
      },
      {
         uid: uuid(),
         firstName: "Kevin"
      },
      {
         uid: uuid(),
         firstName: "Stefan"
      }
   ]
};

export default function(state = initialState, action)
{
   switch (action.type)
   {
      case GET_CONTACTS:
         return{
            ...state
         };
      case DELETE_CONTACT:
         return{
            ...state,
            contacts: state.contacts.filter(contact => contact.uid !== action.payload)
         };
      case ADD_CONTACT:
         return{
            ...state,
            contacts: [action.payload, ...state.contacts]
         };
      default:
         return state;
   }
}
