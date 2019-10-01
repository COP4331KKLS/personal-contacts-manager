import React, { Component } from 'react';
import './EditContactModal.css';
import { Card, CardBody } from 'reactstrap';

class EditContactModal extends Component
{
   render()
   {
      let editContact = (
         <Card className = "CurrentContactCard">
            <CardBody>
               <h4>Edit Contact</h4>
               <form className = "EditContact">
                  <label id = "first-name">First Name</label>
                  <input type = "text" id = "first-name" name = "first-name"/>

                  <label id = "last-name">Last Name</label>
                  <input type = "text" id = "last-name" name = "last-name"/>

                  <label id = "company">Company</label>
                  <input type = "text" id = "company" name = "company"/>

                  <label id = "phone-number">Phone Number</label>
                  <input type = "text" id = "phone-number" name = "phone-number"/>

                  <label id = "email">Email</label>
                  <input type = "text" id = "email" name = "email"/>

                  <label id = "address">Address</label>
                  <input type = "text" id = "address" name = "address"/>

                  <br></br>

                  <button class = "EditButton">Edit</button>
                  <button onClick = {this.props.onClose}>Close</button>
               </form>
            </CardBody>
         </Card>
      );

      if (!this.props.isEditContactOpen)
      {
         editContact = null;
      }

      return (
         <div>
            {editContact}
         </div>
      );
   }
}

export default EditContactModal;
