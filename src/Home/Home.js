import React, { Component } from 'react';
import CreateContactModal from '../CreateContact/CreateContactModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Particles from 'react-particles-js';
import droids from './Droids.gif';

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
     tempContacts: [],
        contacts: [],
        doRender: false,
        editPreFillFirstName: "new",
        editPreFillLastName: "",
        editPreFillCompany : "",
        editPreFillPhoneNumber: "",
        editPreFillEmail: "",
        editPreFillAddress: "",
        editPreFillContactID: "",
        editFirstName: "",
        editLastName: "",
        editCompany : "",
        editPhoneNumber: "",
        editEmail: "",
        editAddress: "",
        editContactID: ""
               }

   }

contactConverter = (responseData) => {
  let tempArray = [];
  let i = 0;
  for (i=0; i<responseData.length; i++)
  {
    tempArray.push({
      uid: this.props.uid,
      firstName: responseData[i].contacts.firstName,
      lastName: responseData[i].contacts.lastName,
      company: responseData[i].contacts.company,
      phoneNumber: responseData[i].contacts.phoneNumber,
      email: responseData[i].contacts.email,
      address: responseData[i].contacts.address,
      cid: i
    });
  }
  this.setState({contacts: tempArray});
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
  this.setState({editPreFillPhoneNumber: evt.target.value});
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
             <td class="tableButtons"><button value={cid} fName={First_Name} class="deleteButton button" onClick={this.deleteContact}>Delete</button></td>

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
                           value={this.state.editPreFillPhoneNumber}
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


   deleteContact= (e) =>{
     var indexDelete = -1//this.getIndex(newArray);
     var newArray = this.state.contacts.slice();
     // console.log(this.state.contacts.length);
     for(var i=0; i<newArray.length; i++)
     {
       if(String(newArray[i].cid)===String(e.target.value))
       {
         indexDelete = i;
         break;
       }
     }
     console.log("Index Delete " + indexDelete);


       let requestUrl = "https://personal-contacts-manager.herokuapp.com/contacts/deleteContact";

       this.setState({
          error: ''
       });

       fetch(requestUrl,
         {
            method: 'DELETE',
            headers: {
               'authorization': this.props.uid,
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              firstName: newArray[indexDelete].firstName,
              lastName : newArray[indexDelete].lastName,
              company : newArray[indexDelete].company,
              phoneNumber : newArray[indexDelete].phoneNumber,
              email: newArray[indexDelete].email,
              address: newArray[indexDelete].address
            })

         })
       .then(response => response.json())
       .then(responseData =>
       {
          if(responseData.error !== "")
          {
             console.log(responseData.error);
             this.setState({
                error: responseData.error,
             });
             console.log(responseData.error);
             return;
          }
          else
{

          this.setState({
             authorization: responseData.message
          });
}
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

   submitSearch = (e) => {

     // const SERVER_URL = "https://personal-contacts-manager.herokuapp.com/contacts/searchContact";

     let requestUrl = "https://personal-contacts-manager.herokuapp.com/contacts/searchContact/?searchstring=" + this.state.searchInput;

     this.setState({
        error: '',
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
        console.log(responseData);
        // this.setState({
        //    tempContacts: responseData
        // });
        this.contactConverter(responseData);

     })
     .catch( error =>
     {
        this.setState({
           error: `Internal server error. ${error}`
        });
     });
     this.setState({doRender: true});
   }
//////////////////// END OF SEARCHSUBMIT ///////////////////////////////////////////////////////////////////////////////////////////



   editContact = (el) =>{
     var indexEdit = -1;
     var newArray = this.state.contacts.slice();
     //Send JSON of form for update
     for(var i=0; i<newArray.length; i++)
     {
       if(String(newArray[i].cid)===String(el.target.value))
       {
         indexEdit = i;
         break;
       }
     }

  this.setState({editPreFillFirstName: newArray[indexEdit].firstName});
  this.setState({editPreFillLastName: newArray[indexEdit].lastName});
  this.setState({editPreFillCompany : newArray[indexEdit].company});
  this.setState({editPreFillPhoneNumber: newArray[indexEdit].phoneNumber});
  this.setState({editPreFillEmail: newArray[indexEdit].email});
  this.setState({editPreFillAddress: newArray[indexEdit].address});

  this.setState({editFirstName: newArray[indexEdit].firstName});
  this.setState({editLastName: newArray[indexEdit].lastName});
  this.setState({editCompany : newArray[indexEdit].company});
  this.setState({editPhoneNumber: newArray[indexEdit].phoneNumber});
  this.setState({editEmail: newArray[indexEdit].email});
  this.setState({editAddress: newArray[indexEdit].address});
  this.setState({editPreFillContactID: el.target.value});
  this.toggleEditModal();
}



   submitEditContact= (e) =>{
     // alert(`${this.state.editPreFillFirstName}`);
     var indexEdit = -1;
     var newArray = this.state.contacts.slice();
     //Send JSON of form for update
     for(var i=0; i<newArray.length; i++)
     {
       if(String(newArray[i].cid)===String(this.state.editPreFillContactID))
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



     //JSON EDIT REQUEST


     let requestUrl = "https://personal-contacts-manager.herokuapp.com/contacts/editContact";

     this.setState({
        error: ''
     });

     fetch(requestUrl,
       {
          method: 'POST',
          headers: {
             'authorization': this.props.uid,
             'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: this.state.editFirstName,
            lastName : this.state.editLastName,
            company : this.state.editCompany,
            phoneNumber : this.state.editPhoneNumber,
            email: this.state.editEmail,
            address: this.state.editAddress,
            editFirstName: this.state.editPreFillFirstName,
            editLastName : this.state.editPreFillLastName,
            editCompany : this.state.editPreFillCompany,
            editPhoneNumber : this.state.editPreFillPhoneNumber,
            editEmail: this.state.editPreFillEmail,
            editAddress: this.state.editPreFillAddress
          })

       })
     .then(response => response.json())
     .then(responseData =>
     {
        if(responseData.error !== "")
        {
           console.log(responseData.error);
           this.setState({
              error: responseData.error,
           });
           console.log(responseData.error);
           return;
        }
        else
{

        this.setState({
           authorization: responseData.message
        });
}
     })
     .catch( error =>
     {
        this.setState({
           error: `Internal server error. ${error}`,
           authorization: ''
        });
     });



   } else {
     // event.preventDefault();
   }

   this.setState({contacts : newArray});
   // this.setState({showContactOpen: false});
   this.toggleEditModal();
   }

   renderTableHeader() {
     // alert(`${this.state.contacts.length}`)
     if(this.state.contacts.length>0){
      let header = Object.keys(this.state.contactHeader)
      header.push("")
      header[6] = ""
      return header.map((key, index) => {
         return <th classNamef="tableHeader" key={index}>{key.toUpperCase()}</th>
      })
    }

    return (
      <div>
         <h1 className="EmptyResults">These aren't the droids you're looking for</h1>
         <img className = "Droids" src = {droids} alt = "droids"/>
      </div>
     );
   }

   render()
   {
      return (
            <div className = "Home">
               <Particles className = "particles" params = {particlesOptions}/>
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
      );
   }
}

export default Home;
