![Block42](https://static.wixstatic.com/media/0f9f87_48376b7086e84c1b9d2a3f86212f5c44~mv2.png/v1/fill/w_300,h_300,al_c,usm_0.66_1.00_0.01/0f9f87_48376b7086e84c1b9d2a3f86212f5c44~mv2.png)

# Block42 CUBIK Token and Crowdsale Contracts

## About

Solidity Contracts for the Block42 CUBIK Token and Crowdsale

- Using [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity) framework for best security and stability
- Token is ERC20 standard
- Using newest Solidity version 0.4.24 at the time of writing
- Source and flattened version using [truffle-flattener](https://github.com/alcuadrado/truffle-flattener). Flattened scripts can be used to deploy at [Remix](http://remix.ethereum.org) without using truffle.

## Development

### Requirements
- [npm](https://docs.npmjs.com/cli/install)
- [truffle](https://github.com/trufflesuite/truffle)
- [truffle-flattener](https://www.npmjs.com/package/truffle-flattener)

### Install dependencies
`$ npm i`

## Compile the contracts
`$ truffle compile`

## Deploy contracts to the local environment
`$ truffle migrate`

## Run test
`$ truffle test`

## Flattened file creation (Optional to deploy at remix without using Truffle)

```
$ cd path-to-project/cubik-contracts
$ truffle-flattener contracts/Cubik.sol > contracts_flattened/Cubik.sol
$ truffle-flattener contracts/CubikVrowdsale.sol > contracts_flattened/CubikVrowdsale.sol
```

## TODO
- Create test cases and run `truffle test`
- Add build testing in Travis CI
[![Build Status](https://travis-ci.org/block42world/cubik-contracts.svg?branch=master)](https://travis-ci.org/block42world/cubik-contracts)
- Add [TimeLockToken](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC20/TokenTimelock.sol)