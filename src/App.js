import { useState, useEffect } from "react";
import Question from "./components/Question";
import Answers from "./components/Answers";
import { qBank } from "./Data";
import "./App.css";

function App() {
  const [qn, setQn] = useState(0);
  const [disable, setDisable] = useState(false);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(15);
  const currentScore = qBank[qn].score;


  useEffect(() => {
    const timer = setInterval(() => setDisable(true), 15000);
    return () => clearInterval(timer);
  }, [qn]);

  useEffect(() => {
    const count =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(count);
  }, [counter]);

  const setDisbaleAfterAnswer = () => {
    setTimeout(() => {
      setDisable(true);
    }, 100);
  };

  const calculateScore = () => {
    setScore(score + currentScore);
  };

  const handleNext = () => {
    const nextQuestion = qn + 1;
    if (nextQuestion < qBank.length) {
      setCounter(15);
      setQn(nextQuestion);
      setDisable(false);
    } else {
      setEnd(true);
    }
  };
  const handleRetake = () => {
    setEnd(false);
    setQn(0);
    setDisable(false);
    setScore(0);
    setCounter(15);
  }

  return (
    <div className="App">
      {end ? (
        <div className="end">
          <p>End of Questions</p>
          <p className="end-score">your score is: {score}</p>
          <button className="retake" onClick={handleRetake}>take the Quiz again</button>
        </div>
      ) : (
        <div className="main">
          <div className="gameInfo">
               <p className="score">
            score <span>{score}</span>
          </p>
          <p className="counter">{counter}</p>
          <p className="level">{qBank[qn].level}</p>
          </div>
         
          <Question qn={qn} />
          <Answers
            qn={qn}
            disable={disable}
            setDisbaleAfterAnswer={setDisbaleAfterAnswer}
            calculateScore={calculateScore}
          />
          <button className="next" onClick={handleNext}>
            next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
