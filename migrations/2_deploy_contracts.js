var HelloWorld = artifacts.require("./HelloWorld.sol");
var OysterPearl = artifacts.require("./OysterPearl.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(OysterPearl);
};
