require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const optimismGoerliUrl =
   process.env.ALCHEMY_API_KEY ?
      `https://opt-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` :
      process.env.OPTIMISM_GOERLI_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};

module.exports.networks = {
  "optimism-goerli": {
    url: optimismGoerliUrl,
    accounts: { mnemonic: process.env.MNEMONIC }
 }   
}