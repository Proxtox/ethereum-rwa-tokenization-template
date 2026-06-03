const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RWATokenization", function () {
  let token;
  let owner, issuer, user;

  beforeEach(async function () {
    [owner, issuer, user] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("RWATokenization");
    token = await Token.deploy("Test RWA", "TRWA");
    await token.deployed();
  });

  it("Should allow approved issuer to mint", async function () {
    await token.connect(owner).mint(user.address, 100, "asset-123");
    expect(await token.balanceOf(user.address)).to.equal(100);
  });
});