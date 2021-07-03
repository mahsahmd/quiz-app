import {qBank} from "../Data";

const Question = ({qn}) => {
    return (
        <div>
            <p className="question">{qBank[qn].question}</p>
        </div>
    )
}

export default Question
