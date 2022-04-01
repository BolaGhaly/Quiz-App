import React, { useState, Fragment } from "react";

const Home = () => {
  const [selectedQuestionsNum, setQuestionsNum] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDiff, setSelectedDiff] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("here 1: " + selectedQuestionsNum);
    console.log("here 2: " + selectedCategory);
    console.log("here 3: " + selectedDiff);
  };

  return (
    <>
      <div className="homeForm">
        <form onSubmit={(e) => formSubmit(e)}>
          <h1>React Quiz</h1>
          <label htmlFor="questionsNum">Number of Questions (1-100):</label>
          <input
            type="number"
            min={1}
            max={100}
            value={selectedQuestionsNum}
            required
            onChange={(e) => {
              setQuestionsNum(parseInt(e.target.value));
            }}
          />

          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            onChange={(e) => {
              setSelectedCategory(e.target.value);
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
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="29">Entertainment: Comics</option>
            <option value="31">Entertainment: Japanese Anime &#38; Manga</option>
            <option value="32">Entertainment: Cartoon &#38; Animations</option>
            <option value="17">Science &#38; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="30">Science: Gadgets</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
          </select>

          <label htmlFor="difficulty">Select Difficulty:</label>
          <select
            id="difficulty"
            onChange={(e) => {
              setSelectedDiff(e.target.value);
            }}
            required
          >
            <option value=" ">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <button className="startButton" type="submit">
            Start Quiz
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
