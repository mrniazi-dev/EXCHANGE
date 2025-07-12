 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title FixerCoin
 * @dev A basic ERC20 token. The deployer of the contract receives the initial supply.
 */
contract FixerCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("FixerCoin", "FIX") {
        // Mint the initial supply to the contract deployer's address
        _mint(msg.sender, initialSupply);
    }
}
