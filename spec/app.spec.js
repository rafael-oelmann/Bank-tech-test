var Account = require("../src/account");

beforeEach(function () {
  fakeAccount = new Account();
  fakeAccount.depositCash(3000);
});

describe("displayBalance()", () => {
  it("returns the users balance with no hisory", () => {
    expect(fakeAccount.displayBalance()).toEqual(3000);
  });
});

describe("depositCash()", () => {
  it("increases balance by amount inputed", () => {
    fakeAccount.depositCash(500);
    expect(fakeAccount.displayBalance()).toEqual(3500);
  });
});
