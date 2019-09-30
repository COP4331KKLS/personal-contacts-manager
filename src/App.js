import React from 'react';
import Signin from './component/Signin';

class App extends React.Component
{
   constructor()
   {
      super();
      this.state =
      {
         route: 'signin'
      }
   }

   render()
   {
      return (
        <div className = "App">
          <Signin />
        </div>
      );
   }
}

export default App;
