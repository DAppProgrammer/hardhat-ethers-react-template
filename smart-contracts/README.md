# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat run scripts/deploy.js --network ropsten
npx hardhat help
```

Verify your contract using hardhat:
npx hardhat verify 0xF2a914DcAd185866d451C87C3268855f1590B8E1 1000000 --network ropsten
npx hardhat verify 0x2d08ff0dE2Ee1F133805A7e320F2D06DDE10a515 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 1 --network ropsten

//Token deployed to: 0xF2a914DcAd185866d451C87C3268855f1590B8E1
//Verify it here: https://ropsten.etherscan.io/address/0xF2a914DcAd185866d451C87C3268855f1590B8E1

//Exchange deployed to: 0x2d08ff0dE2Ee1F133805A7e320F2D06DDE10a515
//Verify it here: https://ropsten.etherscan.io/address/0x2d08ff0dE2Ee1F133805A7e320F2D06DDE10a515#code
