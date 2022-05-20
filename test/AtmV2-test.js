const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
const { Contract, BigNumber } = "ethers";

describe("Atm V2", function () {
  let atmV2 = Contract;

  beforeEach(async function () {
    const AtmV2 = await ethers.getContractFactory("AtmV2");
    atmV2 = await AtmV2.deploy();
    await atmV2.deployed();
  });

  it("should deposit amount", async function () {
    await atmV2.deposit(0);
    expect((await atm.getBalance()).toString()).to.equal("1000");

    await atmV2.deposit(500);
    expect((await atm.getBalance()).toString()).to.equal("1000");
  });

  it("should increase balance correctly", async function () {
    await atmV2.deposit(0);
    await atmV2.add();
    expect((await atm.getBalance()).toString()).to.equal("1000");
  });
});
