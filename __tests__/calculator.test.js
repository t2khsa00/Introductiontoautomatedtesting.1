import { divide } from "../src/calculator.js";

describe("divide function", () => {

  test("divides valid numbers", () => {
    expect(divide(6, 2)).toBe(3);
  });

  test("throws error if arguments are not numbers", () => {
    expect(() => divide("6", 2)).toThrow(TypeError);
  });

  test("throws error if arguments are NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrow(RangeError);
  });

  test("throws error if argument is missing", () => {
    expect(() => divide(6)).toThrow(TypeError);
  });

});
