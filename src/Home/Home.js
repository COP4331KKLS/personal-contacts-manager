import React, { Component } from 'react';
import CreateContactModal from '../CreateContact/CreateContactModal';
import EditContactModal from '../EditContact/EditContactModal';
import ContactList from '../ContactList/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Particles from 'react-particles-js';

import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
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
   state = {
      isNavbarOpen: false
   }

   toggleNavbar = () => {
      this.setState({
         isNavbarOpen: !this.state.isNavbarOpen
      });
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
                  <CreateContactModal />
                  <ContactList />
               </Container>

            </div>
         </Provider>
      );
   }
}

export default Home;
