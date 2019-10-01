import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      uid: props.uid
    }
  }

  render() {
    return (
      <div className='HomeBackground'>
        <div className='LogoutContainer'>
          <input className='LogoutButton' value='LOGOUT' onClick={() => this.props.logout()}></input>
        </div>
        <div className='Content'>
          {/* <Stuff uid={this.state.uid}></Stuff> */}
        </div>
      </div>
    )
  }
}

export default Home;
