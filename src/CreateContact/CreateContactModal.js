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

const SERVER_URL = "https://personal-contacts-manager.herokuapp.com/contacts/addContact";

class CreateContactModal extends Component
{
   constructor(props)
   {
      super(props);
      this.state =
      {
         authorization: props.uid,
         firstName: '',
         lastName: '',
         company: '',
         phoneNumber: '',
         email: '',
         address: '',
         modal: false
      };
   }

   toggle = () =>
   {
      this.setState({
         modal: !this.state.modal
      });
   };

   handleCreateContact = () =>
   {
      let requestUrl = SERVER_URL;
      this.setState({
         error: '',
         authorization: ''
      });

      fetch(requestUrl,
      {
         method: 'POST',
         headers: {
            'authorization': this.props.uid
         },
         body: {
            'firstName': this.state.firstName,
            'lastName': this.state.lastName,
            'company': this.state.company,
            'phoneNumber': this.state.phoneNumber,
            'email': this.state.email,
            'address': this.state.address
         }

      })
      .then(response => response.json())
      .then(responseData =>
      {
         if(responseData.error !== "")
         {
            this.setState({
               error: responseData.error,
               authorization: ''
            });
            return;
         }

         this.setState({
            authorization: responseData.message
         });

      })
      .catch( error =>
      {
         this.setState({
            error: `Internal server error. ${error}`,
            authorization: ''
         });
      });

      console.log(this.state);

      this.toggle();
   }

   render()
   {
      return(
         <div>
            <Button
               color = "dark"
               style = {{marginBottom: '2rem'}}
               onClick = {this.toggle}
            >Create New Contact</Button>

            <Modal isOpen = {this.state.modal} toggle = {this.toggle}>
               <ModalHeader toggle = {this.toggle}>Create New Contact</ModalHeader>
               <ModalBody>
                  <Form>
                     <FormGroup>
                        <Label for = "contact">First Name</Label>
                        <Input
                           type = "text"
                           name = "firstName"
                           id = "contact"
                           onChange = {event => this.setState({firstName: event.target.value})}
                        />

                        <Label for = "contact">Last Name</Label>
                        <Input
                           type = "text"
                           name = "lastName"
                           id = "contact"
                           onChange = {event => this.setState({lastName: event.target.value})}
                        />

                        <Label for = "contact">Company</Label>
                        <Input
                           type = "text"
                           name = "company"
                           id = "contact"
                           onChange = {event => this.setState({company: event.target.value})}
                        />

                        <Label for = "contact">Phone Number</Label>
                        <Input
                           type = "text"
                           name = "phoneNumber"
                           id = "contact"
                           onChange = {event => this.setState({phoneNumber: event.target.value})}
                        />

                        <Label for = "contact">Email</Label>
                        <Input
                           type = "text"
                           name = "email"
                           id = "contact"
                           onChange = {event => this.setState({email: event.target.value})}
                        />

                        <Label for = "contact">Address</Label>
                        <Input
                           type = "text"
                           name = "address"
                           id = "contact"
                           onChange = {event => this.setState({address: event.target.value})}
                        />

                        <Button
                           color = 'dark'
                           style = {{marginTop: '2rem'}}
                           onClick = {() => this.handleCreateContact()}
                           block
                        >Create Contact</Button>
                     </FormGroup>
                  </Form>
               </ModalBody>
            </Modal>
         </div>
      );
   }
}

export default CreateContactModal;
