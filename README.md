![Block42](http://assets.block42.world/images/icons/block42_logo_200.png)

# Block42 CUBIK Token and Crowdsale Contracts
[![made-for-ethereum](https://img.shields.io/badge/made_for-ethereum-454dc3.svg)](https://www.ethereum.org/)

- Using [OpenZeppelin 1.11.0](https://github.com/OpenZeppelin/openzeppelin-solidity) framework for best security and stability
- Token is ERC20 standard
- Using latest [Solidity 0.4.24](http://solidity.readthedocs.io/en/v0.4.24/) at the time of writing
- Using [async/awake](https://truffleframework.com/docs/getting_started/javascript-tests#using-async-await) and [Chai](http://www.chaijs.com/api/bdd/) for clean and readable test code
- Flattened scripts using [truffle-flattener](https://github.com/alcuadrado/truffle-flattener), for deploying to [Remix](http://remix.ethereum.org) without using truffle, or verifying in Etherscan

## Getting Started

### Prerequisites
- [Node.js 10.7.x](https://nodejs.org/en/download/current/)
- [Truffle 4.1.14](https://github.com/trufflesuite/truffle) `npm install -g truffle`
- [ganache-cli](https://github.com/trufflesuite/ganache-cli) `npm install -g ganache-cli`
- [truffle-flattener](https://www.npmjs.com/package/truffle-flattener) `npm install -g truffle-flattener`

### Install dependencies
`npm i`

### Start Ganache CLI to run a local private blockchain, or use GUI [Ganache](https://truffleframework.com/ganache)
`ganache-cli`

### Compile the contracts
`truffle compile`

### Deploy contracts to the local environment
`truffle migrate`

### Run test
`truffle test`

### Create flattened scripts (Optional to deploy at Remix)
```
truffle-flattener contracts/World.sol > contracts_flattened/World.sol
truffle-flattener contracts/Land.sol > contracts_flattened/Land.sol
```

## Contract Address
### Mainnet
- [Cubik.sol](contracts_flattened/Cubik.sol): [0x9a62d3825e07342568a34aa31aad38bb04250806](https://etherscan.io/address/0x9a62d3825e07342568a34aa31aad38bb04250806)
- [CubikCrowdsale.sol](contracts_flattened/CubikCrowdsale.sol): [0xea9Be48045942fFB578e1E295e5401e86CBA8e8c](https://etherscan.io/address/0xea9Be48045942fFB578e1E295e5401e86CBA8e8c)
### Ropsten
- [Cubik.sol](contracts_flattened/Cubik.sol): [0xb4fddd37602b03fa086c42bfa7b9739be38682c3](https://ropsten.etherscan.io/address/0xb4fddd37602b03fa086c42bfa7b9739be38682c3)
- [CubikCrowdsale.sol](contracts_flattened/CubikCrowdsale.sol): [0x382b3d898ccfa4ae5cb7375491bb771107e21b61](https://ropsten.etherscan.io/address/0x382b3d898ccfa4ae5cb7375491bb771107e21b61)
### Kovan
- [Cubik.sol](contracts_flattened/Cubik.sol): [0x9a62d3825e07342568a34aa31aad38bb04250806](https://kovan.etherscan.io/address/0x9a62d3825e07342568a34aa31aad38bb04250806)
- [CubikCrowdsale.sol](contracts_flattened/CubikCrowdsale.sol): [0xea9be48045942ffb578e1e295e5401e86cba8e8c](https://kovan.etherscan.io/address/0xea9be48045942ffb578e1e295e5401e86cba8e8c)

## TODO
- Complete all test cases
- Add Travis CI badge
[![Build Status](https://img.shields.io/travis/Block42World/cubik-contracts.svg?branch=master&style=flat-square)](https://travis-ci.org/Block42World/cubik-contracts)
- Add CoverAlls badge
[![Coverage Status](https://img.shields.io/coveralls/github/Block42World/cubik-contracts/master.svg?style=flat-square)](https://coveralls.io/github/Block42World/cubik-contracts?branch=master)
- Add [TimeLockToken](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC20/TokenTimelock.sol)

## License
Code released under the [MIT License](LICENSE).