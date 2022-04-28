import React from "react";

// Types
import { AnswerObject } from "../API";

type Props = {
  score: number;
  questionNum: number;
  questions: AnswerObject[];
  totalQuestions: number;
  userAnswers: AnswerObject[];
  answers: string[];
};

const ShowResults: React.FC<Props> = (props: Props) => {
  return (
    <div className="resContainer">
      <div className="topContainer">
        <button className="resetQuizButton">
          <a href="/">Reset Quiz</a>
        </button>
        <h4>
          Score: {props.score} / {props.totalQuestions}
        </h4>
      </div>
      <div className="ansContainer">
        {props.userAnswers.map((e: any, index) => (
          <div key={index} className="eachDiv">
            {e.correct === true ? (
              <div className="oneLine">
                <p className="scoreOne">
                  1 pt.
                  <span dangerouslySetInnerHTML={{ __html: e.question }} />
                </p>
                {e.all_answers.map((answer: any, index: number) => (
                  <button
                    key={index}
                    className={`${
                      e.answer === e.correctAnswer && e.correctAnswer === answer
                        ? "correctResBtn"
                        : "anyResBtn"
                    }`}
                    disabled={true}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: answer,
                      }}
                    />
                  </button>
                ))}
              </div>
            ) : e.correct === false ? (
              <div className="oneLine">
                <p className="scoreZero">
                  0 pt.
                  <span dangerouslySetInnerHTML={{ __html: e.question }} />
                </p>
                {e.all_answers.map((answer: any, index: number) => (
                  <button
                    key={index}
                    className={`${
                      answer === e.correctAnswer
                        ? "correctResBtn"
                        : e.answer !== e.correctAnswer && e.answer === answer
                        ? "wrongResBtn"
                        : "anyResBtn"
                    }`}
                    disabled={true}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: answer,
                      }}
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowResults;
