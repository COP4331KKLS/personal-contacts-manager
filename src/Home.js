import React from 'react';
import './Home.css';
//import { Redirect } from 'react-router';

class Home extends React.Component
{
   componentDidMount() 
   {

   }

   callBackendAPI = async () =>
   {
   }

   render()
   {
      return (
         <main>
            <form className = "login" onSubmit = {this.loginFormHandler}>
               <h4>Login</h4>

               <label id = "username" name = "username">Username</label>
               <input type = "text" id = "username" name = "username"></input>

               <label id = "password" name = "password">Password</label>
               <input type = "text" id = "password" name = "password"></input>

               <br></br>

               <button className = "login-button">Login</button>
            </form>

            <form className = "new-account" onSubmit = {this.registerFormHandler}>
               <h4>Create New Account</h4>

               <label id = "new-username">Username</label>
               <input type = "text" id = "new-username" name = "new-username"></input>

               <label id = "new-password">Password</label>
               <input type = "text" id = "new-password" name = "new-password"></input>

               <br></br>

               <button className = "create-account-button">Create Account</button>
            </form>
         </main>
      );
   }

//   registerFormHandler(event)
//   {
//      event.preventDefault();
   //   const data = new FormData(event.target);

//      const username = data.get('new-username');
   //   const password = data.get('new-password');
//
      //fetch("http://localhost:5000/register", {
   //      method: 'POST',
      //   headers: {'username': username, 'password': password}
   //   }).then(res => res.json())
   //   .then(response => console.log('Success', JSON.stringify(response)))
   //   .catch(error => console.log('Request failed', error));
   //}

   loginFormHandler(event)
   {
         event.preventDefault();
         const data = new FormData(event.target);

         const username = data.get('username');
         const password = data.get('password');

         fetch('https://personal-contacts-manager.herokuapp.com/login',
         {
               method: 'POST',
               headers: {
                  'username': username, 
                  'password': password
               }
         })
         .then(response => response.json())
         .then(responseData => {

            if(responseData.error !== ""){
               console.log(`The request had invalid data: ${responseData.error}`);
               return;
            }

            const USER_ID = responseData.message;
            console.log(USER_ID);
         })
         .catch(error => console.log(`there was an error ${error}`));
      }
}

export default Home;
