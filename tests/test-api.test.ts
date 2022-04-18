/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jest/valid-expect */
import fetch from "node-fetch";
import { expect } from "chai";
import "mocha";

let isEmpty: boolean;
let categoriesNum: string[] = [
  "",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "29",
  "31",
  "32",
  "17",
  "18",
  "19",
  "30",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
];

let categoriesName: string[] = [
  "Any Category",
  "General Knowledge",
  "Entertainment: Books",
  "Entertainment: Film",
  "Entertainment: Music",
  "Entertainment: Musicals & Theatres",
  "Entertainment: Television",
  "Entertainment: Video Games",
  "Entertainment: Board Games",
  "Entertainment: Comics",
  "Entertainment: Japanese Anime & Manga",
  "Entertainment: Cartoon & Animations",
  "Science & Nature",
  "Science: Computers",
  "Science: Mathematics",
  "Science: Gadgets",
  "Mythology",
  "Sports",
  "Geography",
  "History",
  "Politics",
  "Art",
  "Celebrities",
  "Animals",
  "Vehicles",
];

describe("Testing API...", () => {
  it("should return 1-50 for the num of questions", async () => {
    for (let i = 0; i < 50; i++) {
      const response: any = `https://opentdb.com/api.php?amount=${i}`;
      const data: any = await (await fetch(response)).json();
      isEmpty = data.results.length === 0;
    }

    expect(isEmpty).to.be.a("boolean");
    expect(isEmpty).to.be.false;
  });

  it("should return true if categoriesNum and categoriesName string arrays are of the same length", () => {
    expect(categoriesNum.length === categoriesName.length).to.be.true;
  });
});
