require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();
const { PROJECT_ID, PRIVATE_KEYS, ETHERSCAN_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: { chainId: 1337 },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${PROJECT_ID}`,
      accounts: PRIVATE_KEYS.split(",")
    }
  },
  paths: {
    artifacts: "./client/src/artifacts"
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY
  }
};
