import { useState } from "react";
import "./styles/style.css";

// Components
import Home from "./components/Home";
import QuestionCard from "./components/QuestionCard";
import ShowResults from "./components/ShowResults";

// Enum Types
import { AnswerObject } from "./API";

const App = () => {
  const [selectedQuestionsNum, setSelectedQuestionsNum] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDiff, setSelectedDiff] = useState("");
  const [hideForm, setHideForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<AnswerObject[]>([]);
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
      {loading && hideForm ? (
        <div className="dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
      {!loading && !gameOver && hideForm ? (
        <QuestionCard
          selectedQuestionsNum={selectedQuestionsNum}
          questionNum={questionNum}
          totalQuestions={selectedQuestionsNum}
          question={questions[questionNum].question}
          answers={questions[questionNum].answers}
          userAnswer={userAnswers ? userAnswers[questionNum] : undefined}
          gameOver={gameOver}
          questions={questions}
          userAnswers={userAnswers}
          score={score}
          setScore={setScore}
          setUserAnswers={setUserAnswers}
          setQuestionNum={setQuestionNum}
          setGameOver={setGameOver}
        />
      ) : null}
      {gameOver && hideForm ? (
        <ShowResults
          questions={questions}
          score={score}
          userAnswers={userAnswers}
          totalQuestions={selectedQuestionsNum}
          answers={questions[questionNum].answers}
          questionNum={questionNum}
        />
      ) : null}
    </>
  );
};

export default App;
