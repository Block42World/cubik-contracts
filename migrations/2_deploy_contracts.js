var Cubik = artifacts.require('Cubik')
var CubikCrowdsale = artifacts.require('CubikCrowdsale')

module.exports = function (deployer, network, accounts) {
  var rate = new web3.BigNumber(5000)
  var wallet = accounts[1]
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
