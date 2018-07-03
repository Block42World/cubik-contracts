pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol";
import "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol";

/**
 * @title Cubik
 * @dev ERC20 CUBIK Token
 *
 * CUBIK Tokens are divisible by 1e18 (1,000,000,000,000,000,000) base
 * units referred to as 'Wei'.
 *
 * CUBIK are displayed using 18 decimal places of precision.
 *
 * 5 Billion CUBIK Token total supply (5 Octillion Wei):
 * 5,000,000,000 * 1e18 == 5e9 * 1e18 == 5e27
 *
 * All initial CUBIK Grains are assigned to the creator of
 * this contract.
 */

contract Cubik is PausableToken, HasNoTokens {

  string public constant name = 'Cubik';                                // Set the token name for display
  string public constant symbol = 'CUBIK';                              // Set the token symbol for display
  uint8 public constant decimals = 18;                                  // Set the number of decimals for display
  uint256 public constant INITIAL_SUPPLY = 5e9 * 10**uint256(decimals); // supply specified in Wei

  /**
   * @dev Cubik Constructor
   * Runs only on initial contract creation.
   */
  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;                                      // Set the total supply
    balances[msg.sender] = INITIAL_SUPPLY;                              // Creator address is assigned all
    emit Transfer(address(0), msg.sender, INITIAL_SUPPLY);
  }

}