import React, { SetStateAction, Dispatch } from "react";

// Types
import { AnswerObject } from "../App";
import { QuestionState } from "../API";

type Props = {
  selectedQuestionsNum: number;
  questionNum: number;
  totalQuestions: number;
  question: string;
  questions: QuestionState[];
  answers: string[];
  userAnswers: AnswerObject[];
  userAnswer: AnswerObject | undefined;
  gameOver: boolean;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  setUserAnswers: Dispatch<SetStateAction<AnswerObject[]>>;
  setQuestionNum: Dispatch<SetStateAction<number>>;
  setGameOver: Dispatch<SetStateAction<boolean>>;
};

const QuestionCard: React.FC<Props> = (props: Props) => {
  const checkAnswer = (e: any) => {
    if (!props.gameOver) {
      // get user's answers
      const answer = e.currentTarget.value;

      // check answer against correct value/answer
      const isCorrect =
        props.questions[props.questionNum].correct_answer === answer;

      // Add score if answer is correct
      if (isCorrect) {
        props.setScore((prev: any) => prev + 1);
      }

      // Save answer in the array for user answers
      const answerObject = {
        question: props.questions[props.questionNum].question,
        answer: answer,
        correct: isCorrect,
        correctAnswer: props.questions[props.questionNum].correct_answer,
      };

      props.setUserAnswers((prev: any) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    if (props.questionNum + 1 === props.selectedQuestionsNum) {
      props.setGameOver(true);
    } else {
      props.setQuestionNum(props.questionNum + 1);
    }
  };

  return (
    <div className="cardContainer">
      <div className="cards">
        <h1>React Quiz</h1>
        <h4 className="score">
          Score: {props.score} / {props.totalQuestions}
        </h4>
        <p
          dangerouslySetInnerHTML={{
            __html: ` Question ${props.questionNum + 1}: ` + props.question,
          }}
        />
        <div className="answersButtons">
          {props.answers.map((answer) => (
            <div key={answer}>
              <button
                disabled={
                  props.userAnswers.length === props.questionNum + 1
                    ? true
                    : false
                }
                className={
                  props.userAnswers.length.toString() ===
                    (props.questionNum + 1).toString() &&
                  props.questions[props.questionNum].correct_answer === answer
                    ? "correctAns"
                    : props.userAnswers.length.toString() ===
                        (props.questionNum + 1).toString() &&
                      props.questions[props.questionNum].correct_answer !==
                        answer &&
                      props.userAnswer?.answer === answer
                    ? "wrongAns"
                    : "anyAns"
                }
                value={answer}
                onClick={checkAnswer}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          ))}
        </div>
        {!props.gameOver &&
        props.userAnswers.length === props.questionNum + 1 &&
        props.questionNum !== props.selectedQuestionsNum - 1 ? (
          <button className="nextButton" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
        {props.gameOver ? console.log(props.userAnswers) : null}
      </div>
    </div>
  );
};

export default QuestionCard;
