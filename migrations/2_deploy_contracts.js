/*
So when we truffle migrate the project these files in the /migrations 
deploy as smart contracts to the ETH blockchain. 
This in turn costs "gas" or ETH.
Truffle uses the first account by default to pay the fees.
*/

// TodoList is the name of the smart contract created in the migration, which we can retrieve from the blockchain! 
const TodoList = artifacts.require("TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
