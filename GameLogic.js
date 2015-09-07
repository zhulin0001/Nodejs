var util = require('util');
var events = require('events');

function GameLogic(){
  events.EventEmitter.call(this);
}

util.inherits(GameLogic, events.EventEmitter);

GameLogic.prototype.init = function(data){
  this.emit('event', data);
}

GameLogic.process = function(data){
  console.log(data);
}
