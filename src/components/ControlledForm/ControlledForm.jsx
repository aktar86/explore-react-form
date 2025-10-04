import React, { useState } from "react";

const ControlledForm = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')


  const handleControlledForm = (e) => {
    e.preventDefault()
    console.log('submitted');

        if(password.length < 6) {
        setError('pass is smaller');
    }
    else{
        setError('')
    }
  };

  const handlePasswordOnchange = e => {
    console.log(e.target.value)
    setPassword(e.target.value)



  }
  return (
    <div>
      <form onSubmit={handleControlledForm}>

        <input
          type="email"
          name="email"
          placeholder="Type your Email"
          required
        />
        <br />
        <input 
        type="password" 
        onChange={handlePasswordOnchange}
        defaultValue={password}
        name="password" 
        id="" 
        placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p
      style={{color:'red'}}
      >{error}</p>
    </div>
  );
};

export default ControlledForm;
