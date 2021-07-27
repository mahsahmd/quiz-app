import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

const OTP = ({code}) => {
  const [counter, setCounter] = useState(15);
  const [pass ,setPass] = useState();
  let history = useHistory();

  //* set counter 
  useEffect(() => {
    const count =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(count);
  }, [counter]);

  //* remove password from localStorage after 15 seconds
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("password");
    }, 15000);
  },[]);

  //* handle OTP submission
  const handleOTP = (event) => {
    event.preventDefault();
    const password = localStorage.getItem("password");
    if (pass === password) {
      history.push("/Quiz");
    }else{
      alert("wrong code");
      event.target[0].value = "";
    }
  };
  
 
  //* handle code resend after 15 seconds
  const handleResendCode = () => {
    const pass = code();
    localStorage.setItem("password",pass);
    console.log(localStorage.getItem("password"));
    setCounter(15);
  }

  return (
    <form className="login" onSubmit={handleOTP}>
      <input
        type="text"
        className="phoneNumber"
        placeholder="enter the 5 digit"
        onChange={(event) => {setPass(event.target.value)}}
      />
      <input type="submit" className="loginSubmit" />
      <p className="counter">{counter}</p>
      {counter === 0 ? <button className="resendCodeButton" type="button" onClick={handleResendCode}>resend code</button> : null}
    </form>
  );
};

export default OTP;
