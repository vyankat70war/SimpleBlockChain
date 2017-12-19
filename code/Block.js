const SHA256 = require('crypto-js/sha256');

module.exports = function(index, timestamp, data, previosHash=''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previosHash = previosHash;
    this.calculateHash = function(){
        return SHA256(this.index + this.timestamp + this.previosHash + JSON.stringify(this.data)).toString();
    }
    this.hash = this.calculateHash();

}
