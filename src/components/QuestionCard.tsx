import React from "react";

// Types
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p>{question}</p>
    <div>
      {answers.map((answer) => (
        <div
          key={answer}
          // correct={userAnswer?.correctAnswer === answer}
          // userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
      {/* {!gameOver &&
      !loading &&
      userAnswers.length === questionNum + 1 &&
      questionNum !== selectedQuestionsNum - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null} */}
    </div>
  </div>
);

export default QuestionCard;
