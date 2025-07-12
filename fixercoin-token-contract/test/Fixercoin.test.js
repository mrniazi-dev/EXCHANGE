 const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FixerCoin", function () {
  let FixerCoin, fixerCoin, owner, addr1;
  const initialSupply = ethers.utils.parseUnits("1000000", 18);

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    FixerCoin = await ethers.getContractFactory("FixerCoin");
    fixerCoin = await FixerCoin.deploy(initialSupply);
    await fixerCoin.deployed();
  });

  it("Should assign the total supply of tokens to the owner", async function () {
    const ownerBalance = await fixerCoin.balanceOf(owner.address);
    expect(await fixerCoin.totalSupply()).to.equal(ownerBalance);
  });

  it("Should transfer tokens correctly", async function () {
    // Transfer 100 tokens from owner to addr1
    await fixerCoin.transfer(addr1.address, ethers.utils.parseUnits("100", 18));
    const addr1Balance = await fixerCoin.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(ethers.utils.parseUnits("100", 18));
  });
});
