require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = fs.readFileSync(".id").toString();
// const projectId = "bb192c99861f3b374bdd3b950cd580089ebc316b";
const projectIds = "v7C0virInfaOJWScj9VakvrVgJAHoC1Q";

// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },

    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${projectId}`,
      accounts: [privateKey],
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${projectIds}`,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
