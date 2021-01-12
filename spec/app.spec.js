var Account = require("../src/account");

let date = new Date(2021, 0, 12);
jasmine.clock().mockDate(date);

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

describe("withdrawCash()", () => {
  it("decreases balance by amount inputed", () => {
    fakeAccount.withdrawCash(500);
    expect(fakeAccount.displayBalance()).toEqual(2500);
  });
});

describe("displayHistory()", () => {
  it("returns a transaction statement in the form of an array", () => {
    fakeAccount.withdrawCash(500);
    fakeAccount.depositCash(2500);
    expect(fakeAccount.displayHistory()).toEqual([
      "12-01-2021 || +2500 || 5000",
      "12-01-2021 || -500 || 2500",
      "12-01-2021 || +3000 || 3000",
    ]);
  });
});
