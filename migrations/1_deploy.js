const UserSBT = artifacts.require("UserSBT");

module.exports = (deployer) => {
  deployer.deploy(UserSBT);
};
