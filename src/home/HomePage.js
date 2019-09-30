import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid
    }

    this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }


  }

  renderTableData() {
     return this.state.students.map((student, index) => {
        const { id, name, age, email } = student //destructuring
        return (
           <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
           </tr>
        )
     })
  }

  renderTableHeader() {
     let header = Object.keys(this.state.students[0])
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
      var divContainer = document.getElementById("showData");
      // divContainer.innerHTML = "Fine";
      divContainer.appendChild(table);
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
  					<button class = "SearchButton" value='Search' onclick =  {this.CreateTableFromJSON()}>Search</button>
  					<button class = "add-new-contact-button">Add New Contact</button>
				  </div>

      <p id="showData"></p>
      <div>
   <h1 id='title'>React Dynamic Table</h1>
   <table id='students'>
      <tbody>
         <tr>{this.renderTableHeader()}</tr>
         {this.renderTableData()}
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
