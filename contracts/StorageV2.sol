// contracts/StorageV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StorageV2 {
    uint256 number;

    function put(uint256 num) public {
        number = num;
    }

    function get() public view returns (uint256) {
        return number;
    }

    // Increments number by 10
    function increment() public view returns (uint256) {
        return number + 10;     
    }
}