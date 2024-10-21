# CryptoZombies DApp - Midterm Project

Team : Team Smart Contract Zombies

## Team Members

**Ajaykumar Burigari** - 809320385 - Burigari@csu.fullerton.edu

**Harshini Madhurai** - 832473029 - harshinimadhurai@csu.fullerton.edu

**Bhargava Sriram Medharametla** - 816283923 - mbahrgavasriram@csu.fullerton.edu

**Jayanth Vallabi** - 884435876 - jayanthvallabi@csu.fullerton.edu

## Project Overview

For our midterm project, we developed a decentralized application (DApp) inspired by CryptoZombies, an interactive coding platform that teaches Ethereum smart contract development using Solidity. The DApp allows users to create and enhance their own zombie army and kitty by leveling them up through gameplay.

## Enhancements Implemented

**Deployment on Sepolia Testnet**: We deployed the smart contracts on the Sepolia testnet to simulate real-world blockchain interactions.

**Enhanced Website Design**: The user interface was revamped to deliver a more engaging and user-friendly experience.

**Custom Kitty Smart Contract**: A custom smart contract was developed on Ganache to generate new kitties, allowing for the creation and management of these entities.

**ReactJS Front-End Migration**: The front-end code was migrated to ReactJS, improving maintainability and scalability.

User-Created Zombies with Custom Names: Users can create zombies, assigning them unique, custom names.

**Dynamic Zombie Cards**: Zombie cards dynamically reflect changes based on the current user's account, adding a personalized touch to the game.

**Auto-Generated Zombie Images**: Zombie images are automatically generated based on the zombie's name and ID using Robohash.

**Zombie Creation Limit**: Each user is allowed to create up to six zombies, adding a strategic element to the gameplay.

**Metamask Integration**: The application connects to Ganache using the latest Metamask Web3 API, enabling seamless blockchain interactions.


## Installation and Setup

To set up and run the CryptoZombies DApp on your local machine, follow these detailed steps:

### 1. Clone the Repository
First, clone the project repository to your local machine:
```bash
git clone "https://github.com/ajay094-dev/BlockChain-Midterm-main.git"
```
This will download all the project files and the source code required to run the DApp.

### 2. Install Dependencies
Navigate to the project directory and install all required dependencies:
```bash
npm install
```
This command installs all the necessary packages listed in the `package.json` file, such as React, Web3, and Truffle.

### 3. Set Up Ganache and Workspace Configuration
To simulate a local Ethereum blockchain, you will need to install **Ganache**. Ganache is an Ethereum development tool that helps run a personal blockchain for testing smart contracts.

- Download and install **Ganache** from [here](https://trufflesuite.com/ganache/).
- Once installed, launch Ganache, create a new workspace, and add this project by configuring it with the `truffle-config.js` file located in the root directory of the repository. This will enable you to deploy and test your smart contracts locally.

### 4. Connect MetaMask Wallet to Ganache
To interact with the DApp, you need to connect your **MetaMask** wallet to the local blockchain provided by Ganache.

- Install the MetaMask extension for your browser, if you haven't already.
- Open MetaMask and add a custom RPC network using the Ganache network URL (typically `http://127.0.0.1:7545`).
- Import test accounts from Ganache into MetaMask by copying private keys from Ganache and using them to add accounts within MetaMask.

### 5. Compile and Deploy Smart Contracts
Once the setup is complete, compile and deploy the smart contracts to the local Ganache network:
```bash
truffle compile
truffle migrate
```
This process compiles the Solidity contracts and deploys them to Ganache, making the smart contracts available for interaction via the DApp.

### 6. Run the Front-End Application
Finally, to start the front-end part of the DApp, run the following command:
```bash
npm run dev
```
This launches the front-end development server, allowing you to interact with the DApp via the browser.


## Deployment on Sepolia Testnet

1. Set Up the Repository in Remix
First, open Remix, the online Solidity IDE, by navigating to Remix Ethereum. Once inside Remix, import your GitHub repository:
Select the "GitHub" import option from the Remix file explorer.
Provide the repository URL, and Remix will automatically load the project files, including your smart contracts.

2. Add Sepolia Testnet to MetaMask
Next, configure MetaMask to connect to the Sepolia Testnet:
Open MetaMask and go to the networks menu, selecting "Add Network."
Use the network details for Sepolia, which can be found at chainid.network. This will include the RPC URL, chain ID, currency symbol, and block explorer URL.
Save the network, and ensure you switch to it before proceeding with the deployment.

3. Deploy the ZombieOwnership Contract via Remix
To deploy your ZombieOwnership contract, go to the "Deploy & Run Transactions" panel in Remix:
Set the Environment dropdown to "Injected Provider - MetaMask," which will automatically connect Remix to your MetaMask wallet.
When prompted, give permission to MetaMask to interact with Remix. This may require confirming a connection or signing a transaction.

4. Deploy the Contract and Confirm on Sepolia
After setting the environment to Sepolia:
In the "Contract" dropdown, select ZombieOwnership (or whichever contract you are deploying).
Click the Deploy button, which will trigger a transaction prompt in MetaMask. Confirm the transaction to deploy the contract.
Once deployed, you can monitor the deployment confirmation either in the Remix console or by checking the transaction on Sepolia Etherscan using the block ID or transaction hash.
This process will deploy your contract to the Sepolia Testnet, allowing you to interact with it in a real test environment!

## Technologies Used

Truffle: v5.4.25 – A development framework for Ethereum, used for compiling and deploying smart contracts.

Ganache: v2.5.4 – A personal blockchain for Ethereum development that allows you to deploy and test smart contracts locally.

Solidity: 0.8.11 (solc-js) – The programming language used to write Ethereum smart contracts.

Node.js: v14.16.0 – JavaScript runtime used for running the development environment and project dependencies.

Web3.js: v1.2.7 – A JavaScript library used to interact with the Ethereum blockchain.

ReactJS: For building the front-end of the decentralized application (DApp).

Sepolia Testnet: Used for testing and deploying the DApp on a public test network.

Remix Ethereum: Online IDE used for developing and deploying smart contracts directly from the browser.

## GitHub Link to the DApp: https://github.com/ajay094-dev/BlockChain-Midterm-main.git
