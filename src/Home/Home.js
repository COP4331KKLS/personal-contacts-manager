import React, { Component } from 'react';
import './Home.css';
import CreateContactModal from '../CreateContact/CreateContactModal';
import EditContactModal from '../EditContact/EditContactModal';
import ContactList from '../ContactList/ContactList';
import Particles from 'react-particles-js';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from '../store';

document.body.style = 'background: #483D3F;';

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
   render()
   {
      return (
         <Provider store = {store}>
            <div className='HomeBackground'>
               <Particles className = "particles" params = {particlesOptions}/>

               <div className='LogoutContainer'>
                  <button className='LogoutButton' onClick={() => this.props.logout()}>Logout</button>
               </div>

               <div className = 'Content'>
                  <div className = "InputContainer">
                     <button className = "SearchButton" value = 'Search' onClick={() => this.setState({doRender: true})}>Search</button>
                     <input type = "text" id = "search" className = "SearchBox"/>
                     <br></br>
                  </div>
                  
                  <Container>
                     <CreateContactModal/>
                     <ContactList />
                  </Container>
               </div>
            </div>
         </Provider>
      );
   }
}

export default Home;
