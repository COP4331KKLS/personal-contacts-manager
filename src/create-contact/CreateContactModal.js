import React, { Component } from 'react';
import './CreateContactModal.css';
import { Card, CardBody } from 'reactstrap';

class CreateContactModal extends Component
{
   render()
   {
      let createContact = (
         <Card className = "NewContactCard">
            <CardBody>
               <h4>Create New Contact</h4>
               <form className = "NewContact">
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

                  <button class = "CreateButton">Create</button>
                  <button onClick = {this.props.onClose}>Close</button>
               </form>
            </CardBody>
         </Card>
      );

      if (!this.props.isOpen)
      {
         createContact = null;
      }

      return (
         <div>
            {createContact}
         </div>
      );
   }
}

export default CreateContactModal
