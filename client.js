// Each page will call their respective functions

// Function for login.html
function loginPage()
{
   // Capture, listen, and process login Form
   const loginForm = document.querySelector('form.login');

   // Loading object
   const loadingObject = document.querySelector('.loading');
   loadingObject.style.display = 'none';

   loginForm.addEventListener('submit', (event) =>
   {
      // prevents the browsers from sending the data
      event.preventDefault();

      // Grab data
      const loginData = new FormData(loginForm);

      const username = loginData.get('username');
      const password = loginData.get('password');

      // current user object for logging in
      const currentUser =
      {
         username,
         password
      };

      loadMain(loginForm, createAccountForm, loadingObject);
      console.log(currentUser);
   });

   // Capture, listen, and process Create Account Form
   const createAccountForm = document.querySelector('form.new-account');

   createAccountForm.addEventListener('submit', (event) =>
   {
      // prevents the browsers from sending the data
      event.preventDefault();

      // Grab data
      const createAccountData = new FormData(createAccountForm);

      const username = createAccountData.get('new-username');
      const password = createAccountData.get('new-password');

      // new user object for creating a new account
      const newUser =
      {
         username,
         password
      };

      loadMain(loginForm, createAccountForm, loadingObject);
      console.log(newUser);
   });
}

// Function for add-new-contact.html
function newContactPage()
{
   // Capture, listen, and process Adding New Contact Form
   const addContactForm = document.querySelector('form.new-contact');

   addContactForm.addEventListener('submit', (event) =>
   {
      // prevents the browsers from sending the data
      event.preventDefault();

      const newData = new FormData(addContactForm);

      // Capture each field
      const firstName = newData.get('first-name');
      const lastName = newData.get('last-name');
      const company = newData.get('company');
      const phoneNumber = newData.get('phone-number');
      const email = newData.get('email');
      const address = newData.get('adddress');

      // Object with contact's updated information
      const updatedContact =
      {
         firstName,
         lastName,
         company,
         phoneNumber,
         email,
         address
      };
      console.log(updatedContact);
   });
}

// Function for edit-contact.html
function editContactPage()
{
   const editContactForm = document.querySelector('form.edit-contact');

   editContactForm.addEventListener('submit', (event) =>
   {
      // prevents the browsers from sending the data
      event.preventDefault();

      const newData = new FormData(editContactForm);

      // Capture each field
      const firstName = newData.get('new-first-name');
      const lastName = newData.get('new-last-name');
      const company = newData.get('new-company');
      const phoneNumber = newData.get('new-phone-number');
      const email = newData.get('new-email');
      const address = newData.get('new-adddress');

      // Object with contact's updated information
      const updatedContact =
      {
         firstName,
         lastName,
         company,
         phoneNumber,
         email,
         address
      };
      console.log(updatedContact);
   });
}

// Function for main-menu.html
function searchContactPage()
{
   const searchContactForm = document.querySelector('form.search');

   // Loading object
   const searchedContact = document.querySelector('.searched-contact');
   searchedContact.style.display = 'none';

   searchContactForm.addEventListener('submit', (event) =>
   {
      // prevents the browsers from sending the data
      event.preventDefault();

      // Capture each field
      const searchData = new FormData(searchContactForm);

      const contact = searchData.get('contact');

      // Display searched contact and his/her information
      loadContact(searchedContact);
      console.log(contact);
   });
}

// Loads up the contact after user searches for it
// In main-menu.html
function loadContact(searchedContact)
{
   searchedContact.style.display = '';

   // TODO: retrieve information from database
}

// Loads the page as soon as the user logs in or creates a new account
function loadMain(loginForm, createAccountForm, loadingObject)
{
   loginForm.style.display = 'none';
   createAccountForm.style.display = 'none';
   loadingObject.style.display = '';
}
