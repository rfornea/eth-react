var HelloWorld = artifacts.require("./HelloWorld.sol");
var Opacity = artifacts.require("./Opacity.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(Opacity);
};
