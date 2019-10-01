import React, { Component } from 'react';
import './Home.css';
import CreateContactModal from '../create-contact/CreateContactModal'

class Home extends Component
{
   state = {
      isOpen: false
   }
   constructor(props)
   {
      super(props)
      this.state = {
         uid: props.uid
      }
   }

   render()
   {
      return (
         <div className='HomeBackground'>

               <div className='LogoutContainer'>
               <input className='LogoutButton' value='LOGOUT' onClick={() => this.props.logout()}></input>
            </div>

            <div className = 'Content'>
               <button className = "SearchButton">Search</button>
               <input type = "text" id = "search" className = "SearchBox"/>

               <br></br>

               <button className = "NewContactButton" onClick = {(e) => this.setState({ isOpen: true })}>Add New Contact</button>
               <CreateContactModal isOpen = {this.state.isOpen} onClose = {(e) => this.setState({isOpen: false})}/>
            </div>
         </div>
      );
   }
}

export default Home;
