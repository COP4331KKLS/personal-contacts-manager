import React, { Component } from 'react';
import Home from '../home/Home';
import './Signin.css';

const SERVER_URL = "https://personal-contacts-manager.herokuapp.com";

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
               error:responseData.error,
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
         <div className="Background">
            <div className='Container'>
               <h1 className='AppTitle'>CONTACTS MANAGER</h1>
               <input className='Field' type='text' onChange={event => this.setState({username: event.target.value})}></input>
               <input className='Field' type='password' onChange={event => this.setState({password: event.target.value})}></input>
               <div className='ButtonContainer'>
                  <input className='LoginButton' type='button' value='LOGIN' onClick={() => this.handleRegisterOrLogin(false)}></input>
                  <input className='RegisterButton' type='button' value='REGISTER' onClick={() => this.handleRegisterOrLogin(true)}></input>
               </div>
               <p className='ErrorMessage'>{this.state.error}</p>
           </div>
         </div>
      );

      const home = <Home uid={this.state.uid} logout={() => this.handleLogout()}></Home>;

      return this.state.isLoggedIn ? home : logInPage;
   }
}

export default Signin;
