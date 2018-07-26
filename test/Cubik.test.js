import ether from '../helpers/ether'

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
      const totalSupply = (await this.cubik.totalSupply.call()).toNumber()
      assert.equal(totalSupply, 5e27, 'total supply is wrong')
    })
    it('should has 5B Cubik in the creator account', async () => {
      var cubik = await Cubik.deployed()
      var balanceOf = (await cubik.balanceOf.call(accounts[0])).valueOf()
      assert.equal(balanceOf, 5e27, "5B Cubik wasn't in the first account")
    })
  })

  describe('transfer', () => {
    it('should transfer right Cubik', async () => {
      await cubik.transfer(accounts[1], 1e27) // transfer 1B to account-1
      var balanceOf0 = (await this.cubik.balanceOf.call(accounts[0])).toNumber()
      assert.equal(balanceOf0, 4e27, 'accounts[0] balance is wrong') // 4B left in account-0
      var balanceOf1 = (await this.cubik.balanceOf.call(accounts[1])).toNumber()
      assert.equal(balanceOf1, 1e27, 'accounts[1] balance is wrong') // 1B left in account-1
    })
  })

  describe('approve', () => {
    it("should give accounts[1] authority to spend account[0]'s Cubik", async () => {
      await cubik.approve(accounts[1], 0.5e27) // approve 500M to account 1
      const allowance = (await this.cubik.allowance.call(accounts[0], accounts[1])).toNumber()
      assert.equal(allowance, 0.5e27, 'allowance is wrong') // 500M allowance from account-0 to account-1
      await cubik.transferFrom(accounts[0], accounts[2], 0.4e27, {from: accounts[1]}) // account-1 send account-0's 400M to account-2
      const balanceOf0 = (await this.cubik.balanceOf.call(accounts[0])).toNumber()
      assert.equal(balanceOf0, 3.6e27, 'accounts[0] balance is wrong') // 3.6B left in account-0
      const balanceOf1 = (await this.cubik.balanceOf.call(accounts[1])).toNumber()
      assert.equal(balanceOf1, 1e27, 'accounts[1] balance is wrong') // 1B left in account-1 (unchanged)
      const balanceOf2 = (await this.cubik.balanceOf.call(accounts[2])).toNumber()
      assert.equal(balanceOf2, 0.4e27, 'accounts[2] balance is wrong') // 400M  left in account-2
    })
  })
})
