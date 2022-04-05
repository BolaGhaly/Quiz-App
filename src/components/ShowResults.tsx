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
    <div>
      <h4>
        Score: {props.score} / {props.totalQuestions}
      </h4>
      {props.userAnswers.map((e: any) => (
        <div style={{ color: "white" }} key={e}>
          <p dangerouslySetInnerHTML={{ __html: e.question }} />
          {props.answers.map((answer) => (
            <button value={answer} key={answer} className=" correctAns">
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameOver;
