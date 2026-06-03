// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title RWATokenization
/// @notice Basic permissioned RWA (Real World Asset) tokenization template
contract RWATokenization {
    string public name;
    string public symbol;
    mapping(address => uint256) public balanceOf;
    mapping(address => bool) public isApprovedIssuer;

    event AssetTokenized(address indexed to, uint256 amount, string assetId);

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
        isApprovedIssuer[msg.sender] = true;
    }

    function mint(address to, uint256 amount, string memory assetId) external {
        require(isApprovedIssuer[msg.sender], "Not approved issuer");
        balanceOf[to] += amount;
        emit AssetTokenized(to, amount, assetId);
    }

    function transfer(address to, uint256 amount) external {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
    }
}