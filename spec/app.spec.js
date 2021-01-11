var Add = require("../src/App");

describe("add test", () => {
  it("calculates x + y = z", () => {
    expect(Add(10, 5)).toEqual(15);
  });
});
