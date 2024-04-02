module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  },
  // compilers: {
  //   solc: {
  //     version: "0.4.17", // Update this to match your contract version
  //     // More options here, such as optimization settings
  //   },
  // },
};