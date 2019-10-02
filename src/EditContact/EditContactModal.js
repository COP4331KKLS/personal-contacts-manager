import React, { Component } from 'react';
import './EditContactModal.css';
import { Card, CardBody } from 'reactstrap';
// import {getFirstName} from '../home/Home'


class EditContactModal extends Component
{
   render()
   {
      // let editContact = (
      //
      // );

      // if (!this.props.isEditContactOpen)
      // {
      //    editContact = null;
      // }

      return (
         <div>
            {this.props.children}
         </div>
      );
   }
}

export default EditContactModal;
