import { FizzBuzz } from "../src/fizzBuzz"
import { expect } from "chai";

describe("fizzBuzz", () => {
  it("should output Fizz when a number is divisible by 3", () => {
    let fizzBuzz = new FizzBuzz()
    expect(fizzBuzz.divisibleByThree(3)).to.equal("Fizz")
  })
})

