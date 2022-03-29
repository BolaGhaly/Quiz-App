import React, { Fragment } from "react";

const Home = () => {
  return (
    <>
      <form>
        <label htmlFor="questionsNum">Number of Questions:</label>
        <input type="questionsNum" min={1} required></input>

        <label htmlFor="category">Select Category:</label>
        <select id="category" name="category" required>
          <option value="">Any Category</option>
          <option value="">General Knowledge</option>
          <option value="">Entertainment: Books</option>
          <option value="">Entertainment: Film</option>
          <option value="">Entertainment: Music</option>
          <option value="">Entertainment: Musicals &#38; Theatres</option>
          <option value="">Entertainment: Television</option>
          <option value="">Entertainment: Comics</option>
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
        <select id="difficulty" name="difficulty" required>
          <option value="">Any Difficulty</option>
          <option value="">Easy</option>
          <option value="">Medium</option>
          <option value="">Hard</option>
        </select>

        <label htmlFor="type">Select Type:</label>
        <select id="type" name="type" required>
          <option value="">Any Type</option>
          <option value="">Multiple Choice</option>
          <option value="">True / False</option>
        </select>
      </form>
    </>
  );
};

export default Home;
