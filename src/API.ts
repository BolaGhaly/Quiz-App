export enum Difficulty {
    ANY = "",
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export enum Type {
  ANY = "",
  MULTIPLE = "multiple",
  TRUE_OR_FALSE = "boolean",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty, type: Type) => {
    const response = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
    const data = await (await fetch(response)).json();
    console.log(data);
}