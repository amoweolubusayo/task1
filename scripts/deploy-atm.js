const { ethers, upgrades } = require("hardhat");

async function main() {
  const Atm = await ethers.getContractFactory("Atm");
  console.log("Deploying Atm...");
  const atm = await upgrades.deployProxy(Atm, [0], {
    initializer: "deposit",
  });

  console.log(atm.address, " atm(proxy) address");
  console.log(
    await upgrades.erc1967.getImplementationAddress(atm.address),
    " _getImplementation"
  );
  console.log(await upgrades.erc1967.getAdminAddress(atm.address), "_getAdmin");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
