const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Atm", function () {
  before(async function () {
    this.Atm = await ethers.getContractFactory("Atm");
  });

  beforeEach(async function () {
    this.atm = await this.Atm.deploy();
    await this.atm.deployed();

    it("", async function () {});
    await this.atm.deposit(1000);
    expect((await this.atm.getBalance()).toString()).to.equal("1000");
  });
});
