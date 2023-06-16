require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    matic: {
      provider: () =>
        new HDWalletProvider(
          PRIVATE_KEY,
          "https://rpc.particle.network/evm-chain?chainId=80001&projectUuid=256a2b62-abc2-4e43-bd25-a507f725c6d4&projectKey=c18uSSyG2iAqVUFbGF04isQ68QwJH8xJY9mw6nvb"
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },

  contracts_build_directory: "./client/build/",
};
