var Cubik = artifacts.require('Cubik')
var CubikCrowdsale = artifacts.require('CubikCrowdsale')

module.exports = function (deployer, network, accounts) {
  var rate = new web3.BigNumber(5000)
  var wallet = accounts[0]
  var cap = new web3.BigNumber(50e21) // 50k ETH

  return deployer
    .then(() => {
      return deployer.deploy(Cubik)
    })
    .then(() => {
      return deployer.deploy(
        CubikCrowdsale,
        rate,
        wallet,
        Cubik.address,
        cap
      )
    })
}

// Truffle 5.0
// const Cubik = artifacts.require('Cubik')
// const CubikCrowdsale = artifacts.require('CubikCrowdsale')

// module.exports = async (deployer, network, accounts) => {
//   const rate = web3.utils.toBN(5000)
//   const wallet = accounts[0]
//   const ether = web3.utils.toWei('1', 'ether')
//   const cap = new web3.utils.BN(ether).mul(new web3.utils.BN(5000)) // 50k ETH

//   const cubikContract = await deployer.deploy(Cubik)
  
//   const cubikCrowdsaleContract = await deployer.deploy(
//     CubikCrowdsale,
//     rate,
//     wallet,
//     Cubik.address,
//     cap
//   )

// }