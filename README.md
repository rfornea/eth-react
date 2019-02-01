# :pizza: Ethereum and React: An introduction to building your first web dApp

## Getting Started
* Have [node](https://nodejs.org/en/) installed. If you run into trouble, this was created with `v8.9.4`
* Install and run [Ganache](http://truffleframework.com/ganache/)
* Install [MetaMask](https://metamask.io/)
  1. Create and connect to a custom RPC network using the Ganache RPC server (currently `http://127.0.0.1:7545`)
  2. Import a new account and use the private key provided by Ganache from account 1.
* Install the [Truffle Framework](http://truffleframework.com/)
  * `npm install -g truffle`
  * you may need to install a specific version of truffle if you run into issues with solidity compiler versions
  not matching what your contract needs
  * `npm view truffle versions` will show you all the versions of truffle
  * `npm install -g truffle@(specify version)` to get a certain version
  * `truffle version` will tell you what version of the solidity compiler this truffle version is using
  * try new truffle versions until you get the right solidity compiler
* Clone or download the repo
* Type `npm install`
  * If you get an error on install, don't panic. It should still work.
* Type `truffle compile` and `truffle migrate`
* Type `npm run start`
* Put on a pair of sunglasses and bask in your blockchain glory. :beer:

## Video Presentation/Demo
[Here](https://www.youtube.com/watch?v=2c3PT9NuFJ8) we go over everything in this repo.

### Remember these steps when starting a new development session.
1. Start Ganache.
2. Unlock MetaMask with local RPC network.
3. Switch accounts to the one we imported.
4. `truffle compile`
5. `truffle migrate` or `truffle migrate --reset` if you get errors such as `Error: Attempting to run transaction 
which calls a contract function, but recipient address (whatever the address is) is not a contract address`
6. `npm run start`

### Testing
Type `truffle test` to test.

### Security
* [Security Considerations](http://solidity.readthedocs.io/en/develop/security-considerations.html)
* [Security Best Practices](https://github.com/ConsenSys/smart-contract-best-practices)

## Troubleshooting Tips
* Is Ganache running?
* Is your MetaMask account unlocked?
* Are you using the MetaMask account associated with your Ganache account (the one we created above)?
* Are you using your custom RPC network in MetaMask?
* If MetaMask can't find your RPC network, try switching to the Main Ethereum Network and back.
* Did you `truffle compile` and `truffle migrate` whenever starting your local network or making changes to your smart contract?
* Transaction error? Try resetting the MetaMask account you created under settings.
* Is `truffle migrate` showing stale settings? Try `truffle migrate --reset`
