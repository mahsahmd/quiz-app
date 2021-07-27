import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import OTP from "./components/OTP";
import "./App.css";

function App() {

  //* generate a 5 digit number as OTP
  const code = () => {
    return Math.floor(Math.random() * 9000) + 9999;
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/Quiz">
          <Quiz />
        </Route>
        <Route exact path="/">
          <Login code={code} />
        </Route>
        <Route exact path="/OTP">
          <OTP code={code} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
