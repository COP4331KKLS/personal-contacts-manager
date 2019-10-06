import React, { Component } from 'react';
import CreateContactModal from '../CreateContact/CreateContactModal';
import EditContactModal from '../EditContact/EditContactModal';
import ContactList from '../ContactList/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Particles from 'react-particles-js';

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

import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   Container
} from 'reactstrap';

import { Provider } from 'react-redux';
import store from '../store';

const particlesOptions =
{
   particles:
   {
      number:
      {
         value: 75,
         density:
         {
            enable: true,
            value_area: 800
         }
      }
   }
}

class Home extends Component
{
   toggleNavbar = () => {
      this.setState({
         isNavbarOpen: !this.state.isNavbarOpen
      });
   }

   toggleEditModal = () =>
   {
      this.setState({
         editModal: !this.state.editModal
      });
   };

   constructor(props)
   {
      super(props);

      //state is by default an object
      this.state =
      {
         uid: props.uid,
         editModal: false,
         isNavbarOpen: false,
     contactHeader:
     {

       firstName: '',
       lastName: '',
       company: '',
       phoneNumber: '',
       email: '',
       address: '',
       cid: '',

     },
        contacts: [
                     {
                         uid: '',
                         firstName: 'Kyle',
                         lastName: 'Rits',
                         company: 'Blah',
                         phoneNumber: '808-990-5604',
                         email: 'KyleRits@Knights.ucf.edu',
                         address: '3721 Pyrite Drive',
                         cid: 'Blah'
                     },
                     {
                       uid: '',
                       firstName: 'Kyle',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: 'Blah'
                     },
                     {
                       uid: '',
                       firstName: 'Kyle',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: 'Blah'
                     }
                 ],
        doRender: false,
        editPreFillFirstName: "new",
        editPreFillLastName: "",
        editPreFillCompany : "",
        editPreFillPhone: "",
        editPreFillEmail: "",
        editPreFillAddress: "",
        editPreFillContactID: "",
        editFirstName: "",
        editLastName: "",
        editCompany : "",
        editPhone: "",
        editEmail: "",
        editAddress: "",
        editContactID: ""
               }

   }

   renderTableData() {
    return this.state.contacts.map((contact, index) => {
       const {firstName:First_Name,lastName: Last_Name, company, phoneNumber, email, address, cid } = contact //destructuring
       return (
          <tr keyContact={cid} class="displayResults">
             <td fName={First_Name} class="firstname">{First_Name}</td>
             <td>{Last_Name}</td>
             <td>{company}</td>
             <td>{phoneNumber}</td>
             <td>{email}</td>
             <td>{address}</td>
             <td class="tableButtons"><button class="editButton button" value={cid}
             fName={First_Name}
             lName={Last_Name}
             company={company}
             phone={phoneNumber}
             email={email}
             address={address}
             onClick={this.toggleEditModal}>Edit</button></td>
             <td class="tableButtons"><button value={cid} class="deleteButton button" onClick={this.deleteContact}>Delete</button></td>

             <Modal isOpen = {this.state.editModal} toggle = {this.toggleEditModal}>
               <ModalHeader toggle = {this.toggleEditModal}>Edit Contact</ModalHeader>
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
                        >Add Contact</Button>
                     </FormGroup>
                  </Form>
               </ModalBody>
            </Modal>
          </tr>
       )
    })
 }

   editContact = (el) =>{
  const First_Name = el.target.getAttribute('fName');
  const Last_Name = el.target.getAttribute('lName');
  const Company = el.target.getAttribute('company');
  const Phone = el.target.getAttribute('phone');
  const Email = el.target.getAttribute('email');
  const Address =  el.target.getAttribute('address');
  console.log(First_Name);
  console.log(Last_Name);
  console.log(Company);
  console.log(Phone);
  console.log(Email);
  console.log(Address);
  // this.getFirstName();
  console.log("Edit Contact");
  // modal.firstname.value =
  // document.getElementById("EditContactss").getElementById("first-name-input");
  // this.editContact.getElementById("first-name-input").value = First_Name;
  // document.getElementById("first-name-edit").value=First_Name;
  console.log(el.target.value);
  this.setState({editPreFillFirstName: First_Name});
  this.setState({editPreFillLastName: Last_Name});
  this.setState({editPreFillCompany : Company});
  this.setState({editPreFillPhone: Phone});
  this.setState({editPreFillEmail: Email});
  this.setState({editPreFillAddress: Address});
  this.setState({editFirstName: First_Name});
  this.setState({editLastName: Last_Name});
  this.setState({editCompany : Company});
  this.setState({editPhone: Phone});
  this.setState({editEmail: Email});
  this.setState({editAddress: Address});
  this.setState({editPreFillContactID: el.target.value});
  this.setState({showContactOpen: true});
}

   deleteContact= (e) =>{
     var indexDelete = -1//this.getIndex(newArray);
     console.log("Delete Contact");
     var newArray = this.state.contacts.slice();
     console.log(this.state.contacts.length);
     for(var i=0; i<newArray.length; i++)
     {
       if(newArray[i].CID===e.target.value)
       {
         indexDelete = i;
       }
     }
     console.log(indexDelete);
     if(indexDelete !== -1){
       newArray.splice(indexDelete,1);
       this.setState({contacts: newArray});
     }
     console.log(e.target.value);
     console.log(e.target.index);
     //Call delete request
   }

   submitEditContact= (e) =>{
     // alert(`${this.state.editPreFillFirstName}`);
     var indexEdit = -1;
     var newArray = this.state.contacts.slice();
     //Send JSON of form for update
     for(var i=0; i<newArray.length; i++)
     {
       if(newArray[i].CID===this.state.editPreFillContactID)
       {
         indexEdit = i;
       }
     }
     //
     // console.log("SUBMIT EDIT CONTACT");
     // console.log(this.state.editPreFillFirstName);
     // alert("Test");

     //
     if(indexEdit !== -1)
     {
     newArray[indexEdit] = {
       firstName: this.state.editPreFillFirstName,
       lastName : this.state.editPreFillLastName,
       company : this.state.editPreFillCompany,
       phoneNumber : this.state.editPreFillPhone,
       email: this.state.editPreFillEmail,
       address: this.state.editPreFillAddress,
       cid: e.target.value
     };
     this.setState({contacts : newArray});
     this.setState({showContactOpen: false});

     //JSON EDIT REQUEST

   } else {
     alert("Error Editing Contact");
     // event.preventDefault();
   }
   }

   renderTableHeader() {
     // alert(`${this.state.contacts.length}`)
     if(this.state.contacts.length>0){
      let header = Object.keys(this.state.contactHeader)
      header.push("")
      header[6] = ""
      return header.map((key, index) => {
         return <th class="tableHeader" key={index}>{key.toUpperCase()}</th>
      })
    }

    return <h1 class="EmptyResults">These aren't the droids you're looking for</h1>
   }

   render()
   {
      return (
         <Provider store = {store}>
            <Particles className = "particles" params = {particlesOptions}/>

            <div className = "Home">
               <Navbar color = "dark" dark expand = "sm">
                  <Container>
                     <NavbarBrand href = "/">Contact Manager</NavbarBrand>
                     <NavbarToggler onClick = {this.toggleNavbar}/>
                     <Collapse isOpen = {this.state.isNavbarOpen} navbar>
                        <NavItem className = "ml-auto">
                        <div className = "SearchContainer">
                           <button className = "SearchButton" value = 'Search' onClick={() => this.setState({doRender: true})}>Search</button>
                           <input type = "text" id = "search" className = "SearchBox"/>
                        </div>
                        </NavItem>

                        <Nav className = "ml-auto" navbar>
                           <NavItem>
                              <button className='LogoutButton' onClick={() => this.props.logout()}>Logout</button>
                           </NavItem>
                        </Nav>
                     </Collapse>
                  </Container>
               </Navbar>

               <Container className = "Content">
                  <CreateContactModal uid = {this.state.uid}/>

                  <div className = "TableContainer">
                     {this.state.doRender? <h1 id="table-title" className = "TableName">Search Results:</h1> : null}
                     <table id='students' className="TableContainer">
                        <tbody>
                           <tr>{this.state.doRender ? this.renderTableHeader() : null}</tr>
                           {this.state.doRender ? this.renderTableData() : null}
                        </tbody>
                     </table>
                  </div>
               </Container>

            </div>
         </Provider>
      );
   }
}

export default Home;
