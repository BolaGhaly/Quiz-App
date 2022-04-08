import React from "react";

// Types
import { AnswerObject } from "../App";
import { QuestionState } from "../API";

type Props = {
  score: number;
  totalQuestions: number;
  userAnswers: AnswerObject[];
  answers: string[];
};

const GameOver: React.FC<Props> = (props: Props) => {
  console.log("here 1 = ", props.answers);

  return (
    <div className="resContainer">
      <h4>
        Score: {props.score} / {props.totalQuestions}
      </h4>
      <div className="ansContainer">
        {props.userAnswers.map((e: any, index) => (
          <div key={index} className="eachDiv">
            {e.correct === true ? (
              <div className="oneLine">
                <p className="scoreOne">
                  1 pt.
                  <span dangerouslySetInnerHTML={{ __html: e.question }} />
                </p>
              </div>
            ) : e.correct === false ? (
              <div className="oneLine">
                <p className="scoreZero">
                  0 pt.
                  <span dangerouslySetInnerHTML={{ __html: e.question }} />
                </p>
              </div>
            ) : null}
            {/* {props.answers.map((answer) => (
              <button key={answer} className="correctAns" disabled={true}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            ))} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameOver;
