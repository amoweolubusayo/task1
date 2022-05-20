const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0xFE4Fc1e2b75116654C10887AF6780984a2e3Ea2C";

async function main() {
  console.log(proxyAddress, " original Atm(proxy) address");
  const AtmV2 = await ethers.getContractFactory("AtmV2");
  console.log("upgrade to AtmV2...");
  const atmV2 = await upgrades.upgradeProxy(proxyAddress, AtmV2);
  console.log(atmV2.address, " AtmV2 address(should be the same)");

  console.log(
    await upgrades.erc1967.getImplementationAddress(atmV2.address),
    " _getImplementation"
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(atmV2.address),
    " _getAdmin"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
