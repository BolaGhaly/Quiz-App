import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  difficulty: string;
  incorrect_answers: string[];
  correct_answer: string;
  question: string;
};

export type QuestionState = Question & {
  answers: string[];
};

export const fetchQuizQuestions = async (
  amount: number,
  category: string,
  difficulty: string
) => {
  const response = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
  const data = await (await fetch(response)).json();
  console.log(data);
  console.log(data.length);
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
