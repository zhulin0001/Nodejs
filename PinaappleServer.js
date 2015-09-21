module.exports = PinaappleServer;

var Constants = require('./Constants');

function PinaappleServer(){
  this.msgQuene = new Array();  //消息队列
  this.processStatus = false;
  this.process = function() {
    if (!this.processStatus && this.msgQuene.length>0) {
      console.log('Show Quene: ' + this.msgQuene);
      this.processStatus = true;
      var data = this.msgQuene.shift();   //取第一个元素并进行处理
      console.log('Process: ' + data);
      this.processStatus = false;
    }
  }
  this.playerNumer = 0;
  this.gameStatus = Constants.GAME_READY;

  function gameloop(data) {
    // body...
  }
}

PinaappleServer.prototype.do = function(data){
  console.log('Do :' + data);
  this.msgQuene.push(data);
  this.process();
};
