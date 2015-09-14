module.exports = Player;

function Player(){
  this.userID = 0;
  this.userName = "";
  this.userIcon = "";
  this.userCards = {"first":"", "second":"", "third":""};
  this.userFoldCards = new Array();
  this.isReady = false;
}
