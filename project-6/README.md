# Fair Trade Coffee Supply Chain

Provides information to track coffee items.

## Project Write-Up

### UML Diagrams

[Activity Diagram](./diagrams/activity.PNG)<br>
[Sequence Diagram](./diagrams/chain state.PNG)<br>
[State Diagram](./diagrams/data mode.PNG)<br>
[Data Modelling](./diagrams/sequence.PNG)<br>

### Libraries

**Truffle**: Used for developing, compiling, testing, and deploying my smart contracts

### IPFS Hosting

Frontend Application hosted on IPFS at [/ipfs/QmSvGeiQH6b5GdDCXm1aQ38Rsv1sD8XuHSCxEE3sLSgyb7](https://gateway.ipfs.io//ipfs/QmSvGeiQH6b5GdDCXm1aQ38Rsv1sD8XuHSCxEE3sLSgyb7);

```
added QmdswUWKHfGXNEB8qogs8TKtTyXR8pVzovXqaM2JJ9D8P3 project-6/webapp
added QmSvGeiQH6b5GdDCXm1aQ38Rsv1sD8XuHSCxEE3sLSgyb7 project-6
 2.41 MiB / 2.41 MiB [=====================================================================] 100.00%dell@Adolf:~/blockchain nanodegree/arcitecture/boiler$ ipfs name publish QmSvGeiQH6b5GdDCXm1aQ38Rsv1sD8XuHSCxEE3sLSgyb7
Published to Qme7a4a9i2Y5W4i3MeQ5Um5eH6sgJw7DCB1zc7wzF87Fnu: /ipfs/QmSvGeiQH6b5GdDCXm1aQ38Rsv1sD8XuHSCxEE3sLSgyb7
```
## Smart Contract
SupplyChain Tx hash: [0x6c1f36240fed5e593f4db0e881d27fe55eeaae923b38031a5b1313fdaf0a8113](https://rinkeby.etherscan.io/tx/0x6c1f36240fed5e593f4db0e881d27fe55eeaae923b38031a5b1313fdaf0a8113)<br>
SupplyChain Contract address: [0x536998e7da5ae3cea03361fb809f236f3a2005f3](https://rinkeby.etherscan.io/address/0x536998e7da5ae3cea03361fb809f236f3a2005f3)<br>


### Full Migrations Output
Starting migrations...
======================
> Network name:    'rinkeby
> Network id:      4
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x18a8fbf0cf99c611f5c91a35e63e4d269192ed856f0a81bd9022e583578a3155
   > Blocks: 0            Seconds: 0
   > contract address:    0x7e9FC9dF045F90d7ef1237e13C0C1aB6C4BFdfa4
   > block number:        1
   > block timestamp:     1591867985
   > account:             0x6cEC1928A3914A89A81701f895088836F9f5335f
   > balance:             99.99549526
   > gas used:            225237 (0x36fd5)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00450474 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00450474 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x1be4212f413ec37e8a7566f992c937af7eae3cbe0956791165a66a33977009a4
   > Blocks: 0            Seconds: 0
   > contract address:    0x6F4FC10491Dbd31f0A07806A2A8eD00BC12c0144
   > block number:        3
   > block timestamp:     1591867988
   > account:             0x6cEC1928A3914A89A81701f895088836F9f5335f
   > balance:             99.98578822
   > gas used:            442989 (0x6c26d)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00885978 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x3b5884e7857366274aa60a550dcc2143b211daf9ca6957a470fbb91436cddb65
   > Blocks: 0            Seconds: 0
   > contract address:    0x030c1c0b008f7FeE19866BD4C73aCEc7CFCc59BD
   > block number:        4
   > block timestamp:     1591867989
   > account:             0x6cEC1928A3914A89A81701f895088836F9f5335f
   > balance:             99.97692748
   > gas used:            443037 (0x6c29d)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00886074 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0xaee1f78c2a51f310115d4c451e71df76665594e06a87bf5b040dfabdf79cda4c
   > Blocks: 0            Seconds: 0
   > contract address:    0xA61F089323BB8a3307e98cd028725E43FCb34e77
   > block number:        5
   > block timestamp:     1591867989
   > account:             0x6cEC1928A3914A89A81701f895088836F9f5335f
   > balance:             99.96806722
   > gas used:            443013 (0x6c285)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00886026 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0xcb3adc7e3d594092e2ab5efabc47579abe943c28cc72595bbd0b1d93a5cb3adb
   > Blocks: 0            Seconds: 0
   > contract address:    0xB084F6aDcC3D9a378424397e84AB2418230ECe21
   > block number:        6
   > block timestamp:     1591867990
   > account:             0x6cEC1928A3914A89A81701f895088836F9f5335f
   > balance:             99.95920696
   > gas used:            443013 (0x6c285)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00886026 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0x923314dfa06f4dc3e927c49c0ed4276516f8268f962ef573625ec9d9eabd1c09
   > Blocks: 0            Seconds: 0
   > contract address:    0xC489c545fB3F77B8C3c236cE2BC71070a16ba317
   > block number:        7
   > block timestamp:     1591867991
   > account:             0x6cEC1928A3914A89A81701f895088836F9f5335f
   > balance:             99.89324502
   > gas used:            3298097 (0x325331)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06596194 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.10140298 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.10590772 ETH
## Development Notes


Truffle v5.1.14<br>
Solidity v0.5.0 (solc-js)<br>
Node v10.16.0<br>
Web3.js v1.0.0<br>
