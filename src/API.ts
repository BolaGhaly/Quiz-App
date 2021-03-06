import { SetStateAction, Dispatch } from "react";
import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  difficulty: string;
  incorrect_answers: string[];
  correct_answer: string;
  question: string;
};

export type AnswerObject = Question & {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
  answers: string[];
};

export const fetchQuizQuestions = async (
  amount: number,
  category: string,
  difficulty: string,
  setSelectedQuestionsNum: Dispatch<SetStateAction<number>>
) => {
  const response = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
  const data = await (await fetch(response)).json();

  if (data.results.length === 0) {
    setSelectedQuestionsNum(10);
    const response = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&category=${category}&type=multiple`;
    const data = await (await fetch(response)).json();

    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  }

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
