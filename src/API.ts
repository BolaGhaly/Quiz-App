import { shuffleArray } from "./utils";

export enum Difficulty {
  ANY = "",
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & {
  answers: string[];
};

export enum Type {
  ANY = "",
  MULTIPLE = "multiple",
  TRUE_OR_FALSE = "boolean",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  type: Type
) => {
  const response = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  const data = await (await fetch(response)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answer: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
