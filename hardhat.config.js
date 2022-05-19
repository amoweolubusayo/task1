require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
const { alchemyApiKey, mnemonic } = require("./secrets.json");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
  etherscan: {
    apiKey: "9EIIENUCJKMA9UVGRIIY4DZV6Z9PDQ4JVH",
  },
  solidity: "0.8.4",
};
