var Cubik = artifacts.require("./Cubik.sol");

contract('Cubik', function(accounts) {
	it("should has 5B Cubik fixed supply", function() {
		return Cubik.deployed().then(function(instance) {
			return instance.totalSupply.call();
		}).then(function(result) {
			assert.equal(result.toNumber(), 5e27, 'total supply is wrong');
		});
	});
	it("should put 5B Cubik in the first account", function() {
		return Cubik.deployed().then(function(instance) {
			return instance.balanceOf.call(accounts[0]);
		}).then(function(balance) {
			assert.equal(balance.valueOf(), 5e27, "5B Cubik wasn't in the first account");
		});
	});
	it("should transfer right Cubik", function() {
		var cubik;
		return Cubik.deployed().then(function(instance) {
			cubik = instance;
			return cubik.transfer(accounts[1], 1e27); // 1B
		}).then(function() {
			return cubik.balanceOf.call(accounts[0]);
		}).then(function(result) {
			assert.equal(result.toNumber(), 4e27, 'accounts[0] balance is wrong');
			return cubik.balanceOf.call(accounts[1]);
		}).then(function(result) {
			assert.equal(result.toNumber(), 1e27, 'accounts[1] balance is wrong');
		})
	});
	it("should give accounts[1] authority to spend account[0]'s Cubik", function() {
		var cubik;
		return Cubik.deployed().then(function(instance) {
			cubik = instance;
			return cubik.approve(accounts[1], 0.5e27); // 500M
		}).then(function() {
			return cubik.allowance.call(accounts[0], accounts[1]);
		}).then(function(result) {
			assert.equal(result.toNumber(), 0.5e27, 'allowance is wrong');
			return cubik.transferFrom(accounts[0], accounts[2], 500e24, {
				from: accounts[1]
			});
		}).then(function() {
			return cubik.balanceOf.call(accounts[0]);
		}).then(function(result) {
			assert.equal(result.toNumber(), 3.5e27, 'accounts[0] balance is wrong'); // 3.5B left
			return cubik.balanceOf.call(accounts[1]);
		}).then(function(result) {
			assert.equal(result.toNumber(), 1e27, 'accounts[1] balance is wrong'); // 1B
			return cubik.balanceOf.call(accounts[2]);
		}).then(function(result) {
			assert.equal(result.toNumber(), 0.5e27, 'accounts[2] balance is wrong'); // 500M
		})
	});
});