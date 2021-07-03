import { useState } from "react";
import { qBank } from "../Data";

const Answers = ({ qn, disable, setDisbaleAfterAnswer, calculateScore }) => {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState("");
  const answer = qBank[qn].correctAnswer;

  const handleCorrectAnswer = (event) => {
    setDisbaleAfterAnswer();
    if (event.target.innerText === answer) {
      setCorrectAnswer(answer);
      calculateScore();
    } else {
      // console.log("wrong");
      setWrongAnswer(event.target.innerText);
      // console.log(event.target.innerText);
      setCorrectAnswer(answer);
    }
  };
  return (
    <div>
      {qBank[qn].answers.map((ans, index) => (
        <button
          className={`answer ${correctAnswer === ans ? "correct" : ""} ${
            wrongAnswer === ans ? "wrong" : ""
          }`}
          key={index}
          onClick={handleCorrectAnswer}
          disabled={disable}
        >
          {ans}
        </button>
      ))}
    </div>
  );
};

export default Answers;
