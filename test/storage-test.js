const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Storage", function () {
  before(async function () {
    this.Storage = await ethers.getContractFactory("Storage");
  });

  beforeEach(async function () {
    this.storage = await this.Storage.deploy();
    await this.storage.deployed();
  });

  // Test case
  it("takes in a number input", async function () {
    // takes a number
    await this.storage.put(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.storage.get()).toString()).to.equal("42");
  });
});
