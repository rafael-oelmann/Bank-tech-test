var Account = require("../src/account");

fakeAccount = new Account();

describe("displayBalance()", () => {
  it("returns the users balance with no hisory", () => {
    expect(fakeAccount.displayBalance()).toEqual(3000);
  });
});
