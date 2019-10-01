import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid,
      search: ''
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

    // sendSearch = () =>
    // {
    //   let requestUrl = SERVER_URL;
    //   requestUrl += '/searchContact/?searchstring=';
    //   requestURL += this.state.searchString;
    //
    //   fetch(requestUrl,
    //     {
    //       method: 'GET',
    //       headers: {authorization: this.uid}
    //     }
    //   ) .then(response => response.json())
    //     .then(responseData => {
    //         if (responseData.error !== "") {
    //             this.setState({
    //                 error:responseData.error,
    //                 uid:''
    //             })
    //             return;
    //         }
    //         this.setState({uid: responseData.message});
    //     }).
    //     catch(error => {
    //             this.setState({
    //              error:Internal server error. ${error},
    //              uid: ''
    //          });
    //     });
    // }


    renderTableData() {
     return this.state.contacts.map((contact, index) => {
        const {"First Name":First_Name,"Last Name": Last_Name, Company, Phone, Email, Address,"Contact ID":CID } = contact //destructuring
        return (
           <tr key={CID}>
              <td>{First_Name}</td>
              <td>{Last_Name}</td>
              <td>{Company}</td>
              <td>{Phone}</td>
              <td>{Email}</td>
              <td>{Address}</td>
              <td><button value={CID} onClick={this.editContact}>Edit</button></td>
              <td><button value={CID} onClick={this.deleteContact}>Delete</button></td>
           </tr>
        )
     })
     // this.setState({doRender: false});

  }

editContact(el){
    console.log("Edit Contact");
    console.log(el.target.value);
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

    CreateTableFromJSON() {
    //event.preventDefault();
	        var myBooks = [
          {
              "First Name": "Kyle",
              "Last Name" : "Rits",
              "Company" : "",
              "Phone" : "808-990-5604",
              "Email": "KyleRits@Knights.ucf.edu",
              "Address": "3721 Pyrite Drive"
          },
          {
            "First Name": "Kyle",
            "Last Name" : "Rits",
            "Company" : "UCF",
            "Phone" : "808-990-5604",
            "Email": "KyleRits@Knights.ucf.edu",
            "Address": ""
          },
          {
            "First Name": "Kyle",
            "Last Name" : "Rits",
            "Company" : "UCF",
            "Phone" : "808-990-5604",
            "Email": "KyleRits@Knights.ucf.edu",
            "Address": "3721 Pyrite Drive"
          }
      ]


// searched = '/search?searchString=' + document.getElementById("contact").value;
// let data = {
// authorization: "5d8bedba4d8fcb57c4eaf0c2",
//
// };
//       let response = await fetch(searched {
//         method: 'GET',
//         headers: JSON.stringify(data)
//       });
//       let myBooks = await response.JSON();
// .
      var table = document.createElement("table");
      // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
      var tr = table.insertRow(-1);
      var th1 = document.createElement("th");
      th1.innerHTML = "First Name";
      tr.appendChild(th1);
      var th2 = document.createElement("th");
      th2.innerHTML = "Last Name";
      tr.appendChild(th2);
      var th3 = document.createElement("th");
      th3.innerHTML = "Company";
      tr.appendChild(th3);
      var th4 = document.createElement("th");
      th4.innerHTML = "Phone";
      tr.appendChild(th4);
      var th5 = document.createElement("th");
      th5.innerHTML = "Email";
      tr.appendChild(th5);
      var th6 = document.createElement("th");
      th6.innerHTML = "Address";
      tr.appendChild(th6);

      //tr.appendChild("Test")

      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (var i = 0; i < myBooks.length; i++) {

          tr = table.insertRow(-1);

          // for (var j = 0; j < col.length; j++) {
          //     var tabCell = tr.insertCell(-1);
          //     tabCell.innerHTML = myBooks[i][col[j]];
          // }
          var newButt = document.createElement('input');
          newButt.setAttribute('type', 'button');
          newButt.setAttribute('value', 'Edit');
          newButt.setAttribute('onclick', "location.href = 'edit-contact.html'");
          tr.insertCell(-1).appendChild(newButt);
          var newButt = document.createElement('input');
          newButt.setAttribute('type', 'button');
          newButt.setAttribute('value', 'Delete');
          newButt.setAttribute('onclick', "CreateTableFromJSON()");
          tr.insertCell(-1).appendChild(newButt);
      }

      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      // var divContainer = document.getElementById("showData");
      // divContainer.innerHTML = "";
      // divContainer.appendChild(table);
      // getElementById("showData").appendChild(table);
  }

toggleRender() {

}

  render() {
    return (
      <div className='HomeBackground'>
        <div className='LogoutContainer'>
          <input className='LogoutButton' value='LOGOUT' onClick={() => this.props.logout()}></input>
        </div>
        <div className='Content'>

				<input type = "text" list = "contacts" id = "contact" name = "contact"/>
          <div>
            <button class = "add-new-contact-button" onClick={() =>  this.setState({
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
                             "First Name": "2",
                             "Last Name" : "Rits",
                             "Company" : "UCF",
                             "Phone" : "808-990-5604",
                             "Email": "KyleRits@Knights.ucf.edu",
                             "Address": "",
                             "Contact ID": "Test"
                           }
                       ]
              })}>Add New Contact</button>
            <button class = "SearchButton" value='Search' onClick={() => this.setState({doRender: true})}>Search</button>

				  </div>

      <table id="showData"></table>
      <div>
   <h1 id='title'>React Dynamic Table</h1>
   <table id='students'>
      <tbody>
         <tr>{this.state.doRender ? this.renderTableHeader() : null}</tr>
         {this.state.doRender ? this.renderTableData() : null}
      </tbody>
   </table>
</div>
          {/* <Stuff uid={this.state.uid}></Stuff> */}
        </div>
      </div>
    )
  }
}

export default HomePage;
