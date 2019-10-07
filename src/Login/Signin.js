import React, { Component } from 'react';
import Home from '../Home/Home';
import Particles from 'react-particles-js';
import './Signin.css';
import { connect } from 'react-redux';
// document.body.style = 'background: #483D3F;';

const SERVER_URL = "https://personal-contacts-manager.herokuapp.com";

const particlesOptions =
{
   particles:
   {
      number:
      {
         value: 250,
         density:
         {
            enable: true,
            value_area: 1000
         }
      }
   }
}

class Signin extends Component
{
   constructor()
   {
      super()
      this.state =
      {
         uid: '',
         username: '',
         password: '',
         error: '',
         isLoggedIn: false
      }
   }

   handleRegisterOrLogin = (isRegistering) =>
   {
      let requestUrl = SERVER_URL;

      if(isRegistering)
      {
         requestUrl += '/register';
      }
      else
      {
         requestUrl += '/login';
      }

      this.setState({
         error:'',
         uid: ''
      });

      fetch(requestUrl,
      {
         method: 'POST',
         headers: {
            'username': this.state.username,
            'password': this.state.password
         }
      })
      .then(response => response.json())
      .then(responseData =>
      {

         if(responseData.error !== "")
         {
            this.setState({
               error: responseData.error,
               uid: ''
            });

            return;
         }

         this.setState({
            uid: responseData.message,
            password: '',
            isLoggedIn: true
         });
      })
      .catch( error =>
      {
         this.setState({
            error:`Internal server error. ${error}`,
            uid: ''
         });
      });
   }

   handleLogout = () =>
   {
      this.setState({
         error:'',
         uid: '',
         isLoggedIn: false
      })
   }

   render()
   {
      const logInPage = (
         <div className = "Signin">
            <Particles className = "particles" params = {particlesOptions}/>
            <div className = "FormContent">
            <h1 className='AppTitle'>HELLO THERE<br></br>(GENERAL KENOBI)</h1>
            <img src="https://i.kym-cdn.com/photos/images/original/001/475/420/c62.gif" class="centerGif"></img>

               <input className = "Field" type = "text" onChange={event => this.setState({username: event.target.value})}></input>
               <input className = "Field" type = "password" onChange={event => this.setState({password: event.target.value})}></input>

               <div className = "ButtonContainer" color = "dark">
                  <button className = "LoginButton" onClick={() => this.handleRegisterOrLogin(false)}>Login</button>
                  <button className = "RegisterButton" onClick={() => this.handleRegisterOrLogin(true)} >Register</button>
               </div>
               <p className = "ErrorMessage">{this.state.error}</p>
            </div>
         </div>
      );

      const home = <Home uid = {this.state.uid} logout = {() => this.handleLogout()}></Home>;

      return this.state.isLoggedIn ? home : logInPage;
   }
}

export default Signin;
