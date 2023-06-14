const UserSBT = artifacts.require("UserSBT");
const { assert } = require("chai");

require("chai").use(require("chai-as-promised")).should();

contract("UserSBT", () => {
  let contract;
  let admin;
  before(async () => {
    contract = await UserSBT.deployed();
    admin = await contract.contractOwner();
  });

  describe("Deployed", () => {
    it("Should be deployed", () => {
      const address = contract.address;
      assert(address !== null || address !== "0x0", "Address was wrong");
      console.log(address);
    });
  });

  describe("Mint & Update", () => {
    let id;
    const cAddress = "0xA9605c1819BF88140b0B8C6DBaC52A71746E3dB2";
    it("Should mint", async () => {
      const rec = await contract.mint(cAddress, "somename", "ipfs");
      console.log("This is the rec", rec.logs[0].args);
      id = rec.logs[0].args.tokenId;
      const data = await contract.getTokenData(cAddress, id);
      assert(data.name === "somename", "Error in creating, detail error");
      console.log("This is the owner ", admin);
    });

    it("Should update metaData", async () => {
      await contract.updateMetadataHash(
        cAddress,
        "someothername",
        "somehash",
        id
      );
      const data = await contract.getTokenData(cAddress, id);
      assert(data.name === "someothername", "Data not updated");
    });
  });
});
