import React, { useState } from "react";
import "./styles/style.css";

// Components
import Home from "./components/Home";
import QuestionCard from "./components/QuestionCard";
import Footer from "./components/Footer";

// Enum Types
import { QuestionState } from "./API";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  // Home - Form
  const [selectedQuestionsNum, setSelectedQuestionsNum] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDiff, setSelectedDiff] = useState("");
  const [hideForm, setHideForm] = useState(false);

  const [loading, setLoading] = useState(false);

  // Questions - Cards
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNum, setQuestionNum] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  return (
    <>
      {hideForm ? null : (
        <Home
          selectedQuestionsNum={selectedQuestionsNum}
          selectedCategory={selectedCategory}
          selectedDiff={selectedDiff}
          setSelectedQuestionsNum={setSelectedQuestionsNum}
          setSelectedCategory={setSelectedCategory}
          setSelectedDiff={setSelectedDiff}
          setHideForm={setHideForm}
          setLoading={setLoading}
          setGameOver={setGameOver}
          setQuestions={setQuestions}
          setScore={setScore}
          setUserAnswers={setUserAnswers}
          setQuestionNum={setQuestionNum}
        />
      )}
      {loading && hideForm ? <p>Loading Questions...</p> : null}
      {!loading && !gameOver && (
        <QuestionCard
          selectedQuestionsNum={selectedQuestionsNum}
          questionNum={questionNum + 1}
          totalQuestions={selectedQuestionsNum}
          question={questions[questionNum].question}
          answers={questions[questionNum].answers}
          userAnswer={userAnswers ? userAnswers[questionNum] : undefined}
          gameOver={gameOver}
          questions={questions}
          loading={loading}
          userAnswers={userAnswers}
          setScore={setScore}
          setUserAnswers={setUserAnswers}
          setQuestionNum={setQuestionNum}
          setGameOver={setGameOver}
        />
      )}
      <Footer />
    </>
  );
};

export default App;
