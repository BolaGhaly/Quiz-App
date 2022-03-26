import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";

// Components
import Home from "./components/Home";
import QuestionCard from "./components/QuestionCard";

// Enum Types
import { QuestionState, Type, Difficulty } from "./API";


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

// will change later...
const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNum, setQuestionNum] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    // reset everything
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM,
      Type.MULTIPLE
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNum(0);
    setTimeout(() => setLoading(false), 1000);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // get user's answers
      const answer = e.currentTarget.value;

      // check answer against correct value/answer
      const isCorrect = questions[questionNum].correct_answer === answer;

      // Add score if answer is correct
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      // Save answer in the array for user answers
      const answerObject = {
        question: questions[questionNum].question,
        answer: answer,
        correct: isCorrect,
        correctAnswer: questions[questionNum].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = questionNum + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQuestionNum(nextQuestion);
    }
  };

  return (
    <>
      <Home />
      {/*
      <div>
        <h1>React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start Quiz
          </button>
        ) : null}
        {!gameOver && !loading ? <p className="score">Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNum={questionNum + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[questionNum].question}
            answers={questions[questionNum].answers}
            userAnswer={userAnswers ? userAnswers[questionNum] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === questionNum + 1 &&
        questionNum !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </div> */}
    </>
  );
};

export default App;
