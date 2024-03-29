<p align="center"><img src="public/logo.svg" align="center" width="250"></p>
<h2 align="center">An NFT Marketplace, Liquidity Pool and Intrest Farm</h2>

<p align="center"><b>🏗️ Next.js + Material UI + dark mode + web3 starter template ⚡</b></p>

This is a starter boilerplate Ethereum dapp using Next.js and material UI with dark mode. There are many web3 template available but most of them depends of web3-react. I tried to use minimum dependencies possible.

Description
Build a general-purpose NFT marketplace with an eye on a modern UI providing a seamless user experience. It should include the following features:

User login with Metamask
- Allow a user to put an NFT on sale at a fixed price with title and description
- Allow a user to change the price of his NFTs while on sale
- List/Filter NFTs available for sale and display the actual content
- Allow website visitors to buy NFTs
- Allow website visitors to search NFTs by free text on title and description
- Front-end, backend design and implementation and smart contracts design and implementation, integration with Metamask wallet via Web3.js.
- Use (The Graph)[https://thegraph.com/docs/quick-start#local-development]

Acceptance criteria
Milestone 1 - Basic Functions

- [ ] Owner's Metamask login into his profile (show his own NFTs)
    - ethers
    - (web3-react)[https://github.com/NoahZinsmeister/web3-react/blob/v6/example/pages/_app.tsx#L2
    - web3modal]
    - @walletconnect/web3-provider
    - web3.js
- [ ] Owner can put NFT for sale (fixed price)
- [ ] List all NFTs for sale and display content (images)
- [ ] Filter NFTs list
    - Price range
    - Author
    - Type of content
    - Recent/Pub date range
- [ ] Buy NFTs
- [ ] Search for NFTs

Milestone 2 - Advanced Functions

- [ ] Support NFTs of music/video/text/gift/file
- [ ] Support sell NFTs as an Auction and allow bids
- [ ] Improvement on UI/UX and performance
- [ ] A simple landing page

Milestone 3 - Liquidity Pool
- [ ] Support NFT staking and issuing of assets for liquidity farming
- [ ] Support mining issued asset
- [ ] Insure NFT Deposits

<p align="center"><img src="public/img/NFT-surety.svg" align="center" width="450"></p>



### Quick start

The first things you need to do is clone repo.

To compile and deploy contract

```bash
cd deploy
npm i
npm start
```

Run the client on base directory

```bash
yarn install
yarn run dev
```

#### Project Structure

```
├── contracts          // All solidity files
│    ├── Example.sol
├── deploy
│    ├── compile.js    // compiles contracts
│    ├── deploy.js     // deploy and get abi and bytecode
│    ├── package.json
├── pages              // All pages of nextjs
│    ├── _app.js
│    ├── _documesnt.js
├── public             // contains static files
│    ├── img
│    ├── icons
├── src
│    ├── contracts     // here we store abi and bytecodes of contracts
│    ├── components    // react components
│    ├── hooks         // web and imp hooks
│    ├── utils         // theme and other lib files
├── .env
├── .gitignore
├── package.json
└── README.md
```
