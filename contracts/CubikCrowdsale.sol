pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol';
import 'openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol';
import "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol";

/**
* @title Cubik crowdsale contract
* @auther Richard Fu
* @dev Complant with OpenZeppelin's imlementation of the crowdsale spec
*/
contract CubikCrowdsale is CappedCrowdsale, AllowanceCrowdsale, HasNoTokens {

  event RateChange(uint256 amount);

  constructor (uint256 _rate, address _wallet, ERC20 _token, uint256 _cap) public Crowdsale(_rate, _wallet, _token) CappedCrowdsale(_cap) AllowanceCrowdsale(_wallet) {
  }

  function setRate(uint256 _rate) external onlyOwner {
    rate = _rate;
    emit RateChange(_rate);
  }
	
}