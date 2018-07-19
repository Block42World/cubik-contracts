pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol';
import 'openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol';
import "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol";

/**
* @title Cubik crowdsale contract
* @author Richard Fu (richardf@block42.world)
* @dev Complant with OpenZeppelin's imlementation of the crowdsale spec.
*/
contract CubikCrowdsale is CappedCrowdsale, AllowanceCrowdsale, HasNoTokens {

  event RateChange(uint256 amount);

  /** 
   * @dev The Cubik crowdsale constructor sets rate, CUBIK owner wallet, CUBIK contract and cap.
   * @param _rate Coverting rate, x CUBIK per ETH
   * @param _wallet CUBIK owner wallet address
   * @param _token CUBIK contract address
   * @param _cap Max amount of wei to be contributed
   */
  constructor (uint256 _rate, address _wallet, ERC20 _token, uint256 _cap) public Crowdsale(_rate, _wallet, _token) CappedCrowdsale(_cap) AllowanceCrowdsale(_wallet) {
  }
  
  /** 
   * @dev Set the converting rate of the crowdsale, owner only
   * @param _rate Coverting rate, ? CUBIK per ETH
   */
  function setRate(uint256 _rate) external onlyOwner {
    rate = _rate;
    emit RateChange(_rate);
  }
	
}