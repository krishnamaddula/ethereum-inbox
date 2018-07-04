const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'invest eyebrow math vendor genuine bottom gentle fog grape gorilla unit photo',
    'https://rinkeby.infura.io/bwknk5KS2QmQ8oLEWwgj'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const results = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x'+bytecode, arguments: ['Hi there!']})
        .send({gas: 1000000, from: accounts[0]});
    
    console.log('Contract deployed to', results.options.address);
};

deploy();