const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
const { Contract, BigNumber } = "ethers";

describe("Atm (proxy) V2", function () {
  let atm = Contract;
  let atmV2 = Contract;

  beforeEach(async function () {
    const Atm = await ethers.getContractFactory("Atm");
    const AtmV2 = await ethers.getContractFactory("AtmV2");

    //initilize with 0
    atm = await upgrades.deployProxy(Atm, [0], { initializer: "deposit" });

    atmV2 = await upgrades.upgradeProxy(atm.address, AtmV2);
  });

  it("should get balance and addition correctly", async function () {
    expect((await atmV2.getBalance()).toString()).to.equal("0");

    await atmV2.add();
    //result = 0 + 500 = 500
    expect((await atmV2.getBalance()).toString()).to.equal("500");
    //balance is now 500, so add 100;
    await atmV2.deposit(100);
    //result = 500 + 100 = 600
    expect((await atmV2.getBalance()).toString()).to.equal("600");
  });
});
