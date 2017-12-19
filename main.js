var BlockChain = require('./code/BlockChain.js');
var Block = require('./code/Block.js');


let testChain = new BlockChain();
testChain.addBlock(new Block(1,'12/12/2017',{amount:10}));
testChain.addBlock(new Block(2,'12/12/2017',{amount:20}));

console.log("is chain valid? " + testChain.isChainValid());


//console.log(JSON.stringify(testChain, null, 4));