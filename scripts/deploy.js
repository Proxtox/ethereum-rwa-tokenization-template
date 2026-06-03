const hre = require("hardhat");

async function main() {
  const RWATokenization = await hre.ethers.getContractFactory("RWATokenization");
  const token = await RWATokenization.deploy("Real World Asset", "RWA");
  await token.deployed();
  console.log("RWATokenization deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});