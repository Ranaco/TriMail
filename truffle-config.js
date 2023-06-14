require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    matic: {
      provider: () =>
        new HDWalletProvider(
          PRIVATE_KEY,
          "wss://rpc.particle.network/evm-chain?chainId=80001&projectUuid=5ec02423-8ed2-4095-b94c-c4b3ee10cfa8&projectKey=cWaltdX1vkwduytUaTuqlrTlNLFOrZ37yO4Niugp"
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },

  contracts_build_directory: "./client/build/",
};
