const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
const { Contract, BigNumber } = "ethers";

describe("Atm (proxy)", function () {
  let box = Contract;

  beforeEach(async function () {
    const Atm = await ethers.getContractFactory("Atm");
    //initilize with 0
    atm = await upgrades.deployProxy(Atm, [0], { initializer: "deposit" });
  });

  it("should return available balance", async function () {
    // console.log(box.address," box(proxy)")
    // console.log(await upgrades.erc1967.getImplementationAddress(box.address)," getImplementationAddress")
    // console.log(await upgrades.erc1967.getAdminAddress(box.address), " getAdminAddress")

    expect((await atm.getBalance()).toString()).to.equal("0");

    await atm.deposit(1000);
    expect((await atm.getBalance()).toString()).to.equal("1000");
  });
});
