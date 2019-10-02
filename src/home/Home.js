import React, { Component } from 'react';
import './Home.css';
import CreateContactModal from '../create-contact/CreateContactModal'
import EditContactModal from '../EditContact/EditContactModal'
// import ReactDOM from "react-dom"
// import Modal from 'react-modal'
import Modal from "../EditContactModal/editContactModal";
class Home extends Component
{
   state = {
     isCreateContactOpen: false,
     isEditContactOpen: false,
      isOpen: false
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
                          "First Name": "Kyle",
                          "Last Name" : "Rits",
                          "Company" : "UCF",
                          "Phone" : "808-990-5604",
                          "Email": "KyleRits@Knights.ucf.edu",
                          "Address": "",
                          "Contact ID": "Test"
                        },
                        {
                          "First Name": "Kyle",
                          "Last Name" : "Rits",
                          "Company" : "UCF",
                          "Phone" : "808-990-5604",
                          "Email": "KyleRits@Knights.ucf.edu",
                          "Address": "3721 Pyrite Drive",
                          "Contact ID": "Yeah"
                        }
                    ],
           doRender: false
                  }
   }

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
   console.log(First_Name);
   console.log("Edit Contact");
   // document.getElementById("EditContactss").getElementById("first-name-input");
   // this.editContact.getElementById("first-name-input").value = First_Name;
   console.log(el.target.value);
   this.setState({showContactOpen: true});
 }


   deleteContact(e){
     console.log("Delete Contact");
     console.log(e.target.value);
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
               <EditContactModal id="EditContactss" isEditContactOpen = {this.state.showContactOpen} onClose = {(e) => this.setState({showContactOpen: false})}/>
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
