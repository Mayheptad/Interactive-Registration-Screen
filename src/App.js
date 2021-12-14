
import Login from './Components/Login';
import React, { useState } from "react";

function App() {

const [userDetails, setUserDetails] = useState({
fName: "", lName: "", email: ""
  });

  function handleChange(evt) {
     evt.preventDefault();
    const { name, value } = evt.target;
setUserDetails( prevValue => ({ ...prevValue, [name]: value }));
  }

  return (
<div className="container">
<h1>  Hello {userDetails.fName} {userDetails.lName} </h1>
        <p>{userDetails.email}</p>
  <Login handleChange={handleChange}/>
    </div>
  );

}

export default App;
