![Block42](http://assets.block42.world/images/icons/block42_logo_200.png)

# Block42 CUBIK Token and Crowdsale Contracts

## About

Solidity Contracts for the Block42 CUBIK Token and Crowdsale

- Using [OpenZeppelin 1.11.0](https://github.com/OpenZeppelin/openzeppelin-solidity) framework for best security and stability
- Token is ERC20 standard
- Using lateset [Solidity 0.4.24](http://solidity.readthedocs.io/en/v0.4.24/) at the time of writing
- Source and flattened version using [truffle-flattener](https://github.com/alcuadrado/truffle-flattener). Flattened scripts can be used to deploy at [Remix](http://remix.ethereum.org) without using truffle.

## Development

### Prerequisites
- [npm](https://docs.npmjs.com/cli/install)
- [truffle](https://github.com/trufflesuite/truffle) `npm install -g truffle`
- [truffle-flattener](https://www.npmjs.com/package/truffle-flattener) `npm install -g truffle-flattener`

### Install dependencies
`$ npm i`

### Compile the contracts
`$ truffle compile`

### Deploy contracts to the local environment
`$ truffle migrate`

### Run test
`$ truffle test`

### Flattened file creation (Optional to deploy at remix without using Truffle)

```
$ cd path-to-project/cubik-contracts
$ truffle-flattener contracts/Cubik.sol > contracts_flattened/Cubik.sol
$ truffle-flattener contracts/CubikVrowdsale.sol > contracts_flattened/CubikVrowdsale.sol
```

### Contract Address
## Mainnet
- [Cubik.sol](contracts_flattened/Cubik.sol): [0x9a62d3825e07342568a34aa31aad38bb04250806](https://etherscan.io/address/0x9a62d3825e07342568a34aa31aad38bb04250806)
- [CubikCrowdsale.sol](contracts_flattened/CubikCrowdsale.sol): [0xea9Be48045942fFB578e1E295e5401e86CBA8e8c](https://etherscan.io/address/0xea9Be48045942fFB578e1E295e5401e86CBA8e8c)
## Ropsten
- [Cubik.sol](contracts_flattened/Cubik.sol): [0xb4fddd37602b03fa086c42bfa7b9739be38682c3](https://ropsten.etherscan.io/address/0xb4fddd37602b03fa086c42bfa7b9739be38682c3)
- [CubikCrowdsale.sol](contracts_flattened/CubikCrowdsale.sol): [0x382b3d898ccfa4ae5cb7375491bb771107e21b61](https://ropsten.etherscan.io/address/0x382b3d898ccfa4ae5cb7375491bb771107e21b61)
## Kovan
- [Cubik.sol](contracts_flattened/Cubik.sol): [0x9a62d3825e07342568a34aa31aad38bb04250806](https://kovan.etherscan.io/address/0x9a62d3825e07342568a34aa31aad38bb04250806)
- [CubikCrowdsale.sol](contracts_flattened/CubikCrowdsale.sol): [0xea9be48045942ffb578e1e295e5401e86cba8e8c](https://kovan.etherscan.io/address/0xea9be48045942ffb578e1e295e5401e86cba8e8c)

### TODO
- Create test cases and run `truffle test`
- Add build testing in Travis CI
[![Build Status](https://travis-ci.org/block42world/cubik-contracts.svg?branch=master)](https://travis-ci.org/block42world/cubik-contracts)
- Add [TimeLockToken](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC20/TokenTimelock.sol)