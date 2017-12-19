const SHA256 = require('crypto-js/sha256');


class Block{

    constructor(index, timestamp, data, previosHash=''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previosHash = previosHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.timestamp + this.previosHash + JSON.stringify(this.data)).toString();
    }
}

class BolckChain{
    constructor(){
        this.chain = [this.createGenesysBlock()];
    }

    createGenesysBlock(){
        return new Block(0,'01/12/2017', 'first block called genesis block', '0');
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previosHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){

        for (let index = 1; index < this.chain.length; index++) {
            const previousBlock = this.chain[index -1];
            const currentBlock = this.chain[index];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previosHash !== previousBlock.hash){
                return false;
            }
            
        }

        return true;
    }

}
let testChain = new BolckChain();
testChain.addBlock(new Block(1,'12/12/2017',{amount:10}));
testChain.addBlock(new Block(2,'12/12/2017',{amount:20}));

console.log("is chain valid? " + testChain.isChainValid());


//console.log(JSON.stringify(testChain, null, 4));