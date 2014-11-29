
/*$(document).ready(function() {
    window.audioElements=[];
    var audios = ['audio/pam.mp3','audio/pim.mp3',
        'audio/pom.mp3','audio/pum.mp3'];
    for(i=0;i<audios.length;i++){
        var audio_elem = document.createElement('audio');
        audio_elem.setAttribute('src', audios[i]);
        audioElements.push(audio_elem);
    }
    window.fail_audio = document.createElement('audio');
    fail_audio.setAttribute('src', 'audio/clap.mp3');

    $.get();

    $('.tile').click(function(){
        var element_id = $(this).attr("element-id");
        if(isPlaying()&& !isPlayingAudio()){
            validateElement(element_id);
        }
    })
});*/



$(document).ready(function() {
    window.game = new GameManager(4)
    $('.tile').click(function(){
        var element_id = $(this).attr("element-id");
        if(game.isPlaying()){
            game.validateElement(parseInt(element_id));
        }
    })
});
