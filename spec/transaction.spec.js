var Transaction = require("../src/transaction");

beforeEach(function () {
  transaction = new Transaction(100, 2500);
});

describe("transactionStatement()", () => {
  it("returns a transaction statement", () => {
    expect(transaction.transactionStatement()).toEqual(3000);
  });
});
