const HDWallet = require("truffle-hdwallet-provider");
// const infuraKey = "8c91f2ef9d214cef96253e7465cf225c";

// const fs = require("fs");
const mnemonic =
  "art museum chest sudden amateur bring proud favorite wide awkward alley riot";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    rinkbey: {
      provider: () =>
        new HDWallet(
          mnemonic,
          "https://rinkeby.infura.io/v3/8c91f2ef9d214cef96253e7465cf225c"
        ),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
};
