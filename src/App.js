import React from 'react';
import NavBar from './components/NavBar'
import {useAuth0} from "./react-auth0-spa"


function App() {

  const {loding} = useAuth0();

  if (loding) {
    return(
            <div>Loading!!!</div>
    );
  }
  return (
    <div className= "App">
      <header>
        <NavBar/>
      </header>

    </div>
        );
}

export default App;
