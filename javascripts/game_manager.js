function GameManager(num_elements){
  this.num_elements = num_elements;
  this.score = 0;
  this.level = 0;
  this.sequence = [];
  this._playing = false;
  this.seq_index = 0;
}

GameManager.prototype.start = function() {
  this.resetSequence()
  this.score = 0;
  this.level = 0;
  this._playing = true;
  this.createNewStep();
  this.animateStart();
};

GameManager.prototype.stop = function() {
  this._playing = false;
  this.animateFail();
};

GameManager.prototype.validateElement = function(elem_index) {
  var expected=this.sequence[this.seq_index++];
  if(elem_index==expected){
    this.score += this.getReward();
    this.updateScore();
    if(this.seq_index==this.sequence.length){
      this.seq_index=0;
      this.createNewStep();
    }
  }else{
    this.stop();
  }
};

GameManager.prototype.getReward = function() {
  return (this.level+1)*5;
};

GameManager.prototype.resetSequence = function() {
  this.sequence=[];
  this.seq_index = 0;
};

GameManager.prototype.createNewStep = function() {
  var next_step = parseInt(Math.random()*this.num_elements);
  this.sequence.push(next_step);
  if(this.sequence.length%5==0){
    this.level++;
  }
  this.animateElement(0);
};

GameManager.prototype.isPlaying = function() { return this._playing == true }

/*
* Anamiations
*/

GameManager.prototype.animateElement = function(index) {
  var self = this;
  var element = $(".tile[element-id='"+self.sequence[index]+"']");
  setTimeout( function(){
    self.removeAnimatedTileClass(element);
    if(index < self.sequence.length-1){
      setTimeout( function(){
        self.animateElement(++index);
      }, 10);
    }
  }, self.getAnimationTime())
  
  self.addAnimatedTileClass(element);
};

GameManager.prototype.getAnimationTime = function() {
  var millis = 100+ 500/(this.level+1);
  return millis;
}

GameManager.prototype.addAnimatedTileClass = function(element){
  element.css('stroke', '#A41EA8').css('stroke-opacity','1')
  .css('stroke-width', '5');
}
GameManager.prototype.removeAnimatedTileClass = function(element){
  element.css('stroke', '').css('stroke-opacity','0.3')
  .css('stroke-width', '2');
}
GameManager.prototype.updateScore = function(){
  $("#score").text(this.score);
}

GameManager.prototype.animateFail = function(){
  $("#score_container").attr("fill", "#F55C5C");
}
GameManager.prototype.animateStart = function(){
  $("#score_container").attr("fill", "#CFCFCF");
}
