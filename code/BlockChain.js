
var Block = require('./Block');


module.exports = function(){
    this.createGenesysBlock = function(){
        return new Block(0,'01/12/2017', 'first block called genesis block', '0');
    }
    this.chain = [this.createGenesysBlock()];

    this.getLatestBlock = function(){
        return this.chain[this.chain.length - 1];
    }

    this.addBlock = function(newBlock){
        newBlock.previosHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    this.isChainValid = function(){
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
