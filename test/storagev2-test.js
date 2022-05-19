const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StorageV2", function () {
  before(async function () {
    this.StorageV2 = await ethers.getContractFactory("StorageV2");
  });

  beforeEach(async function () {
    const StorageV2 = await ethers.getContractFactory("StorageV2");
    this.storageV2 = await upgrades.deployProxy(StorageV2, [42], {
      initializer: "put",
    });
    await this.storageV2.deployed();
  });

  // Test case
  it("takes in a number input and adds 10", async function () {
    // takes a number
    await this.storageV2.put(42);
    await this.storageV2.increment();
    expect((await this.storageV2.get()).toString()).to.equal("42");
  });
});
