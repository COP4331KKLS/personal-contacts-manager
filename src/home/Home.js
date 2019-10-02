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
           contacts: [
                        {
                            "First Name": "Kyle",
                            "Last Name" : "Rits",
                            "Company" : "",
                            "Phone" : "808-990-5604",
                            "Email": "KyleRits@Knights.ucf.edu",
                            "Address": "3721 Pyrite Drive",
                            "Contact ID": "Blah"
                        },
                        {
                          "First Name": "Kevin",
                          "Last Name" : "Rabinasdfasdfa",
                          "Company" : "POOP",
                          "Phone" : "123456789",
                          "Email": "KFJADASF@Knights.ucf.edu",
                          "Address": "",
                          "Contact ID": "2"
                        },
                        {
                          "First Name": "LLOYD",
                          "Last Name" : "SOMETHING?",
                          "Company" : "POOPS",
                          "Phone" : "987654321",
                          "Email": "LLOYD@Knights.ucf.edu",
                          "Address": "NOT HERE",
                          "Contact ID": "4"
                        }
                    ],
           doRender: false,
           editPreFillFirstName: "new",
           editPreFillLastName: "",
           editPreFillCompany : "",
           editPreFillPhone: "",
           editPreFillEmail: "",
           editPreFillAddress: "",
           editPreFillContactID: ""
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
       const {"First Name":First_Name,"Last Name": Last_Name, Company, Phone, Email, Address,"Contact ID":CID } = contact //destructuring
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
   this.setState({showContactOpen: true});
 }

submitEditContact= (e) =>{
  this.setState({showContactOpen: false});
}

   deleteContact= (e) =>{
     console.log("Delete Contact");
     console.log(e.target.value);
     this.setState({doRender: false});
   }

   renderTableHeader() {
      let header = Object.keys(this.state.contacts[0])
      header[6] = ""
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   render()
   {

      return (
         <div className='HomeBackground'>
            <div className='LogoutContainer'>
               <input className='LogoutButton' value='LOGOUT' onClick={() => this.props.logout()}></input>
            </div>

            <div className = 'Content'>
               <button className = "SearchButton" value='Search' onClick={() => this.setState({doRender: true})}>Search</button>
               <input type = "text" id = "search" className = "SearchBox"/>

               <br></br>

               <button className = "NewContactButton" onClick = {(e) => this.setState({ isCreateContactOpen: true })}>Add New Contact</button>
               <CreateContactModal isCreateContactOpen = {this.state.isCreateContactOpen} onClose = {(e) => this.setState({isCreateContactOpen: false})}/>

               {this.state.showContactOpen ? <EditContactModal id="EditContactss" isEditContactOpen = {this.state.showContactOpen} onClose = {(e) => this.setState({showContactOpen: false})}>
               <Card className = "CurrentContactCard">
                  <CardBody>
                     <h4>Edit Contact</h4>
                     <form className = "EditContact" id={this.state.editPreFillLastName}>
                        <label id = "first-name">First Name</label>
                        <input placeholder={this.state.editPreFillFirstName} type = "text" id = "first-name-edit" name = "first-name"/>

                        <label id = "last-name">Last Name</label>
                        <input placeholder={this.state.editPreFillLastName} type = "text" id = "last-name" name = "last-name"/>

                        <label id = "company">Company</label>
                        <input placeholder={this.state.editPreFillCompany} type = "text" id = "company" name = "company"/>

                        <label id = "phone-number">Phone Number</label>
                        <input placeholder={this.state.editPreFillPhone} type = "text" id = "phone-number" name = "phone-number"/>

                        <label id = "email">Email</label>
                        <input placeholder={this.state.editPreFillEmail} type = "text" id = "email" name = "email"/>

                        <label id = "address">Address</label>
                        <input placeholder={this.state.editPreFillAddress} type = "text" id = "address" name = "address"/>

                        <br></br>

                        <button class = "EditButton" onClick = {this.submitEditContact}>Edit</button>
                        <button onClick = {(e) => this.setState({showContactOpen: false})}>Close</button>
                     </form>
                  </CardBody>
               </Card>
               </EditContactModal> : null}


               <br></br>
               <h1 id='title'>React Dynamic Table</h1>
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
