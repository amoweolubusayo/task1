// contracts/AtmV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Atm.sol";

contract AtmV2 is Atm{
    // adds to the balance by 500
    function add() public {
        deposit(getBalance()+500);
    }
}