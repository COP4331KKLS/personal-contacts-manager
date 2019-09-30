import React from 'react';

class Home extends React.Component
{
   render()
   {
      return(
         <main>
            <form class = "search">

               <button class = "search-button">Search</button>

               <input type = "text" list = "contacts" id = "contact" name = "contact" required/>
            </form>

            <nav>
               <button class = "add-new-contact-button" onClick = "location.href = 'add-new-contact.html'">Add New Contact</button>
               <button class = "remove-contact-button" onClick = "location.href = 'remove-contact.html'">Remove Contact</button>
            </nav>

            <div class = "searched-contact">
               <h4>NAME OF CONTACT</h4>

               <p>This should display all of the contacts information</p>

               <button class = "edit-contact" onClick = "location.href = 'edit-contact.html'">Edit</button>
               <button class = "remove-current-contact" onClick = "location.href = 'remove-contact.html'">Remove</button>
            </div>

            <div id = "main-menu"></div>
         </main>
      );
   }
}

export default Home;
