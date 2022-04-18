/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jest/valid-expect */
import fetch from "node-fetch";
import { expect } from "chai";
import "mocha";

let isEmpty: boolean;
// let categories: string[] = [""];

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


});
