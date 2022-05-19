const { ethers, upgrades } = require("hardhat");

async function main() {
  const StorageV2 = await ethers.getContractFactory("StorageV2");
  console.log("Upgrading Storage...");
  await upgrades.upgradeProxy(
    "0xCe604589E2B15EfE1f97C6C729900E7b7E623F1f",
    StorageV2
  );
  console.log("Storage upgraded");
}

main();
