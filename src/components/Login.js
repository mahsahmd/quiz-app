import { useState } from "react";
import { useHistory } from "react-router-dom";
// const redis = require("redis");

const Login = ({code}) => {
  // const port = 6379;
  // const client = redis.createClient(port);
  const [number,setNumber] = useState();
  let history = useHistory();

  //* handle login with phone number
  const handleLogin = (event) => {
    event.preventDefault();
    const password = code();
    localStorage.setItem('number',number);
    localStorage.setItem('password', password);
    history.push("/OTP");
    console.log(localStorage.getItem("password"));
    // client.setex("key",15,pass);
  };
  
  return (
    <form className="login" onSubmit={handleLogin}>
      <input
        type="text"
        className="phoneNumber"
        placeholder="enter your Number"
        onChange={(event) => setNumber(event.target.value)}
      />
      <input type="submit" className="loginSubmit" />
    </form>
  );
};

export default Login;
