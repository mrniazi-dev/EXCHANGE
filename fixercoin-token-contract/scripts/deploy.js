 const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const FixerCoin = await hre.ethers.getContractFactory("FixerCoin");

  // Define the initial supply (e.g., 1 million tokens with 18 decimals)
  const initialSupply = hre.ethers.utils.parseUnits("1000000", 18);

  const fixerCoin = await FixerCoin.deploy(initialSupply);

  await fixerCoin.deployed();

  console.log("FixerCoin deployed to:", fixerCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
