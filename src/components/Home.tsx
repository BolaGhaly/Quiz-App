import React, { useState, Fragment } from "react";

const Home = () => {
  const [selectedQuestionsNum, setQuestionsNum] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDiff, setSelectedDiff] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="homeForm">
        <form onSubmit={() => formSubmit}>
          <h1>React Quiz</h1>
          <label htmlFor="questionsNum">Number of Questions:</label>
          <input
            type="number"
            min={1}
            max={500}
            value={selectedQuestionsNum}
            required
            onChange={(e) => {
              setQuestionsNum(parseInt(e.target.value));
              console.log(selectedQuestionsNum);
            }}
          />

          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              console.log(selectedCategory);
            }}
            required
          >
            <option value=" ">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &#38; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="29">Entertainment: Comics</option>
            <option value="">Entertainment: Video Games</option>
            <option value="">Entertainment: Board Games</option>
            <option value="">Entertainment: Japanese Anime &#38; Manga</option>
            <option value="">Entertainment: Cartoon &#38; Animations</option>
            <option value="">Science &#38; Nature</option>
            <option value="">Science: Computers</option>
            <option value="">Science: Mathematics</option>
            <option value="">Science: Gadgets</option>
            <option value="">Mythology</option>
            <option value="">Sports</option>
            <option value="">Geography</option>
            <option value="">History</option>
            <option value="">Politics</option>
            <option value="">Art</option>
            <option value="">Celebrities</option>
            <option value="">Animals</option>
            <option value="">Vehicles</option>
          </select>

          <label htmlFor="difficulty">Select Difficulty:</label>
          <select id="difficulty" required>
            <option value=" ">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <button className="startBttn" type="submit">
            Start Quiz
          </button>
          {/* {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start Quiz
          </button>
        ) : null} */}
        </form>
      </div>
    </>
  );
};

export default Home;
