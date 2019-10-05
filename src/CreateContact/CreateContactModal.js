import React, { Component } from 'react';
import
{
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   Form,
   FormGroup,
   Label,
   Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addContact } from '../actions/itemActions'
import './CreateContactModal.css';
import uuid from 'uuid';

const SERVER_URL = "https://personal-contacts-manager.herokuapp.com/addContact";

class CreateContactModal extends Component
{
   state =
   {
      modal: false,
      firstName: ''
   };

   toggle = () =>
   {
      this.setState({
         modal: !this.state.modal
      });
   };

   onChange = (e) =>
   {
      this.setState({[e.target.firstName]: e.target.value});
   };

   onSubmit = (e) =>
   {
      e.preventDefault();

      const newContact =
      {
         uid: uuid(),
         firstName: this.state.name
      }

      this.props.addContact(newContact);

      this.toggle();
   };

   render()
   {
      return(
         <div>
            <Button
               color = "dark"
               style = {{marginBottom: '2rem'}}
               onClick = {this.toggle}
            >Create New Contact</Button>

            <Modal
               isOpen = {this.state.modal}
               toggle = {this.toggle}
            >
               <ModalHeader toggle = {this.toggle}>Create New Contact</ModalHeader>
               <ModalBody>
                  <Form onSubmit = {this.onSubmit}>
                     <FormGroup className = "FormContent">
                        <Label for = "firstName">First Name</Label>
                        <Input type = "text"
                           name = "firstName"
                           id = "contact"
                           placeholder = "Create New Contact"
                           onChange = {this.onChange}
                        />

                        <Button
                           style = {{marginTop: '2rem'}}
                           block
                        >Add Contact</Button>
                     </FormGroup>
                  </Form>
               </ModalBody>
            </Modal>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   contact: state.contact
});

export default connect(mapStateToProps, { addContact })(CreateContactModal);
