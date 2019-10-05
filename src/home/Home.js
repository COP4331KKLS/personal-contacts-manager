import React, { Component } from 'react';
import './Home.css';
import CreateContactModal from '../create-contact/CreateContactModal'
import EditContactModal from '../EditContact/EditContactModal'
import { Card, CardBody } from 'reactstrap';

// import ReactDOM from "react-dom"
// import Modal from 'react-modal'
// import Modal from "../EditContactModal/editContactModal";
class Home extends Component
{
   state = {
     isCreateContactOpen: false,
     isEditContactOpen: false,
      isOpen: false,
      showContactOpen: false
   }
   constructor(props)
   {
      super(props)
      this.state = {
         uid: props.uid,
         search: '',
         showEditModal: false,
         setShowEditModal: false

      }

      this.state = { //state is by default an object
        contactHeader:
        {
          "First Name": "",
          "Last Name" : "",
          "Company" : "",
          "Phone" : "",
          "Email": "",
          "Address": "",
          "CID": ""
        },
           contacts: [
                        {
                            "First Name": "Kyle",
                            "Last Name" : "Rits",
                            "Company" : "",
                            "Phone" : "808-990-5604",
                            "Email": "KyleRits@Knights.ucf.edu",
                            "Address": "3721 Pyrite Drive",
                            "CID": "Blah"
                        },
                        {
                          "First Name": "Kevin",
                          "Last Name" : "Rabinasdfasdfa",
                          "Company" : "POOP",
                          "Phone" : "123456789",
                          "Email": "KFJADASF@Knights.ucf.edu",
                          "Address": "",
                          "CID": "2"
                        },
                        {
                          "First Name": "LLOYD",
                          "Last Name" : "SOMETHING?",
                          "Company" : "POOPS",
                          "Phone" : "987654321",
                          "Email": "LLOYD@Knights.ucf.edu",
                          "Address": "NOT HERE",
                          "CID": "4"
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

                  this.getFirstName = this.getFirstName.bind(this);
   }

   getFirstName() {
     console.log(this.editPreFillFirstName);
     console.log("^^^");
     return this.editPreFillFirstName;
   };

   renderTableData() {
    return this.state.contacts.map((contact, index) => {
       const {"First Name":First_Name,"Last Name": Last_Name, Company, Phone, Email, Address, CID } = contact //destructuring
       return (
          <tr keyContact={CID}>
             <td fName={First_Name}>{First_Name}</td>
             <td>{Last_Name}</td>
             <td>{Company}</td>
             <td>{Phone}</td>
             <td>{Email}</td>
             <td>{Address}</td>
             <td><button value={CID}
             fName={First_Name}
             lName={Last_Name}
             company={Company}
             phone={Phone}
             email={Email}
             address={Address}
             onClick={this.editContact}>Edit</button></td>
             <td><button value={CID} onClick={this.deleteContact}>Delete</button></td>
          </tr>
       )
    })
    // this.setState({doRender: false});

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
    "First Name": this.state.editPreFillFirstName,
    "Last Name" : this.state.editPreFillLastName,
    "Company" : this.state.editPreFillCompany,
    "Phone" : this.state.editPreFillPhone,
    "Email": this.state.editPreFillEmail,
    "Address": this.state.editPreFillAddress,
    "CID": e.target.value
  };
  this.setState({contacts : newArray});
  // alert(`${newArray[indexEdit].Phone}`);
  // console.log(this.state.editPreFillLastName);
  // console.log(this.editCompany);
  // console.log(this.editPhone);
  // console.log(this.editEmail);
  // console.log(this.editAddress);
  this.setState({showContactOpen: false});
} else {
  alert("Error Editing Contact");
}
}

 getIndex = (value, array) => {
  for(var i=0; i<this.state.contacts.length; i++)
  {
    // console.log(array[i].CID);
    if(array[i].CID===value){
      return i;
    }
    return -1;
  }
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
     // this.setState({doRender: false});
   }


   renderTableHeader() {
     // alert(`${this.state.contacts.length}`)
     if(this.state.contacts.length>0){
      let header = Object.keys(this.state.contactHeader)
      header[6] = ""
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
    }

    return <h1>These aren't the droids you're looking for</h1>
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
   render()
   {

      return (
         <div className='HomeBackground'>
            <div className='LogoutContainer'>
               <input className='LogoutButton' value='LOGOUT' onClick={() => this.props.logout()}></input>
            </div>

            <div className = 'Content'>
            <h1>HELLO THERE</h1>
            <br></br>
               <button className = "SearchButton" value='Search' onClick={() => this.setState({doRender: true})}>Search</button>
               <input type = "text" id = "search" className = "SearchBox"/>

               <br></br>

               <button className = "NewContactButton" onClick = {(e) => this.setState({ isCreateContactOpen: true })}>Add New Contact</button>
               <CreateContactModal isCreateContactOpen = {this.state.isCreateContactOpen} onClose = {(e) => this.setState({isCreateContactOpen: false})}/>

               {this.state.showContactOpen ? <EditContactModal id="EditContactss" isEditContactOpen = {this.state.showContactOpen} onClose = {(e) => this.setState({showContactOpen: false})}>
               <Card className = "CurrentContactCard">
                  <CardBody>
                     <h4>Edit Contact</h4>
                     <form className = "EditContact" id={this.state.editPreFillLastName} onSubmit = {this.submitEditContact}>
                        <label id = "first-name">First Name</label>
                        <input onChange={this.handleFirstNameChange} value={this.state.editPreFillFirstName} type = "text" id = "first-name-edit" name = "first-name"/>

                        <label id = "last-name">Last Name</label>
                        <input onChange={this.handleLastNameChange} value={this.state.editPreFillLastName} type = "text" id = "last-name" name = "last-name"/>

                        <label id = "company">Company</label>
                        <input onChange={this.handleCompanyChange} value={this.state.editPreFillCompany} type = "text" id = "company" name = "company"/>

                        <label id = "phone-number">Phone Number</label>
                        <input onChange={this.handlePhoneChange} value={this.state.editPreFillPhone} type = "text" id = "phone-number" name = "phone-number"/>

                        <label id = "email">Email</label>
                        <input onChange={this.handleEmailChange} value={this.state.editPreFillEmail} type = "text" id = "email" name = "email"/>

                        <label id = "address">Address</label>
                        <input onChange={this.handleAddressChange} value={this.state.editPreFillAddress} type = "text" id = "address" name = "address"/>

                        <br></br>

                        <button class = "EditButton">Edit</button>
                        <button onClick = {(e) => this.setState({showContactOpen: false})}>Close</button>
                     </form>
                  </CardBody>
               </Card>
               </EditContactModal> : null}


               <br></br>
               {this.state.doRender? <h1 id="table-title">Search Results:</h1> : null}
               <table id='students'>
                  <tbody>
                     <tr>{this.state.doRender ? this.renderTableHeader() : null}</tr>
                     {this.state.doRender ? this.renderTableData() : null}
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default Home;
