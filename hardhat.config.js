require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: {
        version: "0.6.12",
        settings: {
            optimizer: {
                enabled: true,
                runs: 100, // Optimized for reducing code size
            },
        },
    },
    networks: {
        fantomMainnet: {
            url: "https://fantom.drpc.org",
            chainId: 0xfa,
            accounts: [process.env.PRIVATE_KEY]
        },
    },
};
