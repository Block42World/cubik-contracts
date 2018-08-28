const { ether } = require('openzeppelin-solidity/test/helpers/ether')

const BigNumber = web3.BigNumber

const should = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

const Cubik = artifacts.require('Cubik')

contract('Cubik', (accounts) => {
  beforeEach(async () => {
    this.cubik = await Cubik.new()
  })

  describe('initialization', () => {
    it('should has 5B Cubik fixed supply', async () => {
      const totalSupply = await this.cubik.totalSupply()
      totalSupply.should.be.bignumber.equal(5e27)
    })
    it('should has 5B Cubik in the creator account', async () => {
      const balanceOf = await this.cubik.balanceOf(accounts[0])
      balanceOf.should.be.bignumber.equal(5e27)
    })
  })

  describe('transfer', () => {
    it('should transfer right Cubik', async () => {
      await this.cubik.transfer(accounts[1], 1e27) // transfer 1B to account-1
      var balanceOf0 = await this.cubik.balanceOf.call(accounts[0])
      balanceOf0.should.be.bignumber.equal(4e27)
      var balanceOf1 = await this.cubik.balanceOf.call(accounts[1])
      balanceOf1.should.be.bignumber.equal(1e27)
    })
  })

  describe('approve', () => {
    it("should give accounts[1] authority to spend account[0]'s Cubik", async () => {
      await this.cubik.approve(accounts[1], 0.5e27) // approve 500M to account 1
      const allowance = await this.cubik.allowance.call(accounts[0], accounts[1])
      allowance.should.be.bignumber.equal(0.5e27)
      await this.cubik.transferFrom(accounts[0], accounts[2], 0.4e27, {from: accounts[1]}) // account-1 send account-0's 400M to account-2
      const balanceOf0 = await this.cubik.balanceOf.call(accounts[0])
      balanceOf0.should.be.bignumber.equal(4.6e27) // 5-0.4=4.6B left in account-0
      const balanceOf1 = await this.cubik.balanceOf.call(accounts[1])
      balanceOf1.should.be.bignumber.equal(0) // 0 left in account-1
      const balanceOf2 = await this.cubik.balanceOf.call(accounts[2])
      balanceOf2.should.be.bignumber.equal(0.4e27) // 0.4B  left in account-2
    })
  })
})
