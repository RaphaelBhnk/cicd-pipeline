const sum = require("../src/sum");

test("adds 12 + 34 to equal 46", () => {
  expect(sum(12, 34)).toBe(46);
});

test("adds 0 -5 to equal -5", () => {
  expect(sum(0, -5)).toBe(-5);
});

test("adds 21 1 to equal 22", () => {
  expect(sum(21, 1)).toBe(22);
});
