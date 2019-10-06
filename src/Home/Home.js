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
         searchInput: "",
     contactHeader:
     {

       "First Name": '',
       "Last Name": '',
       company: '',
       "Phone Number": '',
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
                         cid: '1'
                     },
                     {
                       uid: '',
                       firstName: 'KEvin',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: '2'
                     },
                     {
                       uid: '',
                       firstName: 'Stefan',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: '3'
                     },{
                         uid: '',
                         firstName: 'Kyle',
                         lastName: 'Rits',
                         company: 'Blah',
                         phoneNumber: '808-990-5604',
                         email: 'KyleRits@Knights.ucf.edu',
                         address: '3721 Pyrite Drive',
                         cid: '1'
                     },
                     {
                       uid: '',
                       firstName: 'KEvin',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: '2'
                     },
                     {
                       uid: '',
                       firstName: 'Stefan',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: '3'
                     },{
                         uid: '',
                         firstName: 'Kyle',
                         lastName: 'Rits',
                         company: 'Blah',
                         phoneNumber: '808-990-5604',
                         email: 'KyleRits@Knights.ucf.edu',
                         address: '3721 Pyrite Drive',
                         cid: '1'
                     },
                     {
                       uid: '',
                       firstName: 'KEvin',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: '2'
                     },
                     {
                       uid: '',
                       firstName: 'Stefan',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: '3'
                     },{
                         uid: '',
                         firstName: 'Kyle',
                         lastName: 'Rits',
                         company: 'Blah',
                         phoneNumber: '808-990-5604',
                         email: 'KyleRits@Knights.ucf.edu',
                         address: '3721 Pyrite Drive',
                         cid: '1'
                     },
                     {
                       uid: '',
                       firstName: 'KEvin',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: '2'
                     },
                     {
                       uid: '',
                       firstName: 'Stefan',
                       lastName: 'Rits',
                       company: '',
                       phoneNumber: '808-990-5604',
                       email: 'KyleRits@Knights.ucf.edu',
                       address: '3721 Pyrite Drive',
                       cid: '3'
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

handleFirstNameChange = (evt) => {
  // const test = evt.target.value;
  // console.log(test);
  this.setState({editPreFillFirstName: evt.target.value});
  // console.log(this.editPreFillContactID);
  // console.log(evt.target.value);
  // console.log(this.editPreFillFirstName);
}

handleLastNameChange = (evt) => {
  this.setState({editPreFillLastName: evt.target.value});
}

handleCompanyChange = (evt) => {
  this.setState({editPreFillCompany: evt.target.value});
}

handlePhoneChange = (evt) => {
  this.setState({editPreFillPhone: evt.target.value});
}

handleEmailChange = (evt) => {
  this.setState({editPreFillEmail: evt.target.value});
}

handleAddressChange = (evt) => {
  this.setState({editPreFillAddress: evt.target.value});
}

handleSearchInputChange = (evt) => {
  this.setState({searchInput: evt.target.value});
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
             onClick={this.editContact}>Edit</button></td>
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
                           onChange={this.handleFirstNameChange}
                           value={this.state.editPreFillFirstName}
                        />

                        <Label for = "contact">Last Name</Label>
                        <Input
                           type = "text"
                           name = "lastName"
                           id = "contact"
                           onChange={this.handleLastNameChange}
                           value={this.state.editPreFillLastName}
                        />

                        <Label for = "contact">Company</Label>
                        <Input
                           type = "text"
                           name = "company"
                           id = "contact"
                           onChange={this.handleCompanyChange}
                           value={this.state.editPreFillCompany}
                        />

                        <Label for = "contact">Phone Number</Label>
                        <Input
                           type = "text"
                           name = "phoneNumber"
                           id = "contact"
                           onChange={this.handlePhoneChange}
                           value={this.state.editPreFillPhone}
                        />

                        <Label for = "contact">Email</Label>
                        <Input
                           type = "text"
                           name = "email"
                           id = "contact"
                           onChange={this.handleEmailChange}
                           value={this.state.editPreFillEmail}
                        />

                        <Label for = "contact">Address</Label>
                        <Input
                           type = "text"
                           name = "address"
                           id = "contact"
                           onChange={this.handleAddressChange}
                           value={this.state.editPreFillAddress}
                        />

                        <Button
                           color = 'dark'
                           style = {{marginTop: '2rem'}}
                           onClick = {() => this.submitEditContact()}
                           block
                        >Submit Edit</Button>
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
  this.toggleEditModal();
}



   deleteContact= (e) =>{
     var indexDelete = -1//this.getIndex(newArray);
     var newArray = this.state.contacts.slice();
     console.log(this.state.contacts.length);
     for(var i=0; i<newArray.length; i++)
     {
       if(newArray[i].cid===e.target.value)
       {
         indexDelete = i;
         break;
       }
     }
     console.log(indexDelete);
     if(indexDelete !== -1){

       let requestUrl = "https://personal-contacts-manager.herokuapp.com/contacts/deleteContact";

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
            "firstName": newArray[indexDelete].firstName,
            "lastName" : newArray[indexDelete].lastName,
            "company" : newArray[indexDelete].company,
            "phoneNumber" : newArray[indexDelete].phoneNumber,
            "email": newArray[indexDelete].email,
            "address": newArray[indexDelete].address
          }

       })
       .then(response => response.json())
       .then(responseData =>
       {
          if(responseData.error !== "")
          {
             console.log(responseData.error);
             this.setState({
                error: responseData.error,
                authorization: ''
             });
             console.log(responseData.error);
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



       newArray.splice(indexDelete,1);
       this.setState({contacts: newArray});
     }
     console.log(e.target.value);
     console.log(e.target.index);
     //Call delete request





   }

   submitSearch = (e) => {

     // const SERVER_URL = "https://personal-contacts-manager.herokuapp.com/contacts/searchContact";

     let requestUrl = "https://personal-contacts-manager.herokuapp.com/contacts/searchContact/?searchstring=" + this.state.searchInput;

     this.setState({
        error: '',
        authorization: ''
     });

     fetch(requestUrl,
     {
        method: 'GET',
        headers: {
           'authorization': this.props.uid
        }
     })
     .then(response => response.json())
     .then(responseData =>
     {
        if(responseData.error !== "")
        {
          alert("Entered error if statement " + responseData.error + " !");
          alert("Entered error if statement " );

           this.setState({
              error: responseData.error,
              authorization: '',
              contacts: [{
                  uid: '',
                  firstName: 'Kyle',
                  lastName: 'Rits',
                  company: 'Blah',
                  phoneNumber: '808-990-5604',
                  email: 'KyleRits@Knights.ucf.edu',
                  address: '3721 Pyrite Drive',
                  cid: '1'
              }]
           });
           return;
        }

        alert("Search results: " + responseData.message);
        this.setState({
           contacts: responseData.message
        });

     })
     .catch( error =>
     {
        this.setState({
           error: `Internal server error. ${error}`,
           authorization: ''
        });
     });

     alert("The search is for: " + requestUrl);
     this.setState({doRender: true});
   }
//////////////////// END OF SEARCHSUBMIT ///////////////////////////////////////////////////////////////////////////////////////////


   submitEditContact= (e) =>{
     // alert(`${this.state.editPreFillFirstName}`);
     var indexEdit = -1;
     var newArray = this.state.contacts.slice();
     //Send JSON of form for update
     for(var i=0; i<newArray.length; i++)
     {
       if(newArray[i].cid===this.state.editPreFillContactID)
       {
         indexEdit = i;
         break;
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
       uid: this.props.uid,
       firstName: this.state.editPreFillFirstName,
       lastName : this.state.editPreFillLastName,
       company : this.state.editPreFillCompany,
       phoneNumber : this.state.editPreFillPhone,
       email: this.state.editPreFillEmail,
       address: this.state.editPreFillAddress,
       cid: this.state.editPreFillContactID
     };
     this.setState({contacts : newArray});
     // this.setState({showContactOpen: false});
     this.toggleEditModal();


     //JSON EDIT REQUEST


     let requestUrl = "https://personal-contacts-manager.herokuapp.com/contacts/editContact";

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
          "firstName": this.state.editFirstName,
          "lastName" : newArray[indexEdit].lastName,
          "company" : newArray[indexEdit].company,
          "phoneNumber" : newArray[indexEdit].phoneNumber,
          "email": newArray[indexEdit].email,
          "address": newArray[indexEdit].address
        }

     })
     .then(response => response.json())
     .then(responseData =>
     {
        if(responseData.error !== "")
        {
           console.log(responseData.error);
           this.setState({
              error: responseData.error,
              authorization: ''
           });
           console.log(responseData.error);
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
                        <NavItem >
                        <div className = "SearchContainer">
                           <button className = "SearchButton" value = 'Search' onClick={this.submitSearch}>Search</button>
                           <input type = "text" id = "search" className = "SearchBox" onChange={this.handleSearchInputChange}
                           value={this.state.searchInput}/>
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
