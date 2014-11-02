var sequence = [];
var seq_index = 0;
var n_elem = 0;
var score = 0;
var _playing = false;
var _playingAudio = false;

var startGame= function(num_elements){
  console.log("STARTING Game!");
  setNumElements(num_elements);
  resetSequence();
  createNewStep();
  score = 0;
  _playing = true;
}

var stopGame = function(){
  console.log("GAME STOPPED");
  fail_audio.play();
  _playing = false;
}
/* INITIALICERS */
var setNumElements = function(num_elements){ n_elem = num_elements;}

var resetSequence = function(){
  sequence=[];
  seq_index = 0;
}

var isPlaying = function(){ return _playing == true }
var isPlayingAudio = function(){ return _playingAudio == true }

var validateElement = function(elem_id){
  expected=sequence[seq_index++]
  var elem_id_num = parseInt(elem_id);
  if(elem_id_num==expected){
    $("#score").text(score+=5); //5 points of reward
    playAudioFor(elem_id_num, function(){
      if(seq_index==sequence.length){
        seq_index=0;
        createNewStep();
      }
    })
  }else{
    console.log("FAILED!");
    stopGame();
  }

}

var createNewStep = function(){
  var next_step = parseInt(Math.random()*n_elem);
  sequence.push(next_step);
  animateElement(0);
}

var animateElement = function(index){
  var element_index = sequence[index];
  var element = $(".tile[element-id='"+element_index+"']");

  var audio = audioElements[element_index];
  playAudioFor(element_index,function(){
    removeAnimatedTileClass(element);
    if(index < sequence.length-1){
      animateElement(++index);
    }
  })
  addAnimatedTileClass(element);
  audio.play();
}

var addAnimatedTileClass = function(element){
  element.css('stroke', '#A41EA8').css('stroke-opacity','1')
  .css('stroke-width', '5');
}
var removeAnimatedTileClass = function(element){
  element.css('stroke', '').css('stroke-opacity','0.3')
  .css('stroke-width', '2');
}

var playAudioFor = function(elem_index,cb){
  if(isPlayingAudio())
    return;
  var audio = audioElements[elem_index];
  audio.playbackRate=2
  audio.addEventListener('ended',function(){
    audioElements[elem_index] = audio.cloneNode(true);
    _playingAudio = false;
    if(typeof cb == 'function')
      cb()
  });
  audio.play();
  _playingAudio = true;
}
