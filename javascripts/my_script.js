
$(document).ready(function() {
    window.audioElements=[];
    var audios = ['audio/pam.mp3','audio/pim.mp3',
        'audio/pom.mp3','audio/pum.mp3'];
    for(i=0;i<audios.length;i++){
        var audio_elem = document.createElement('audio');
        audio_elem.setAttribute('src', audios[i]);    
        audioElements.push(audio_elem);
    }

    $.get();

    $('.tile').click(function(){
        var element_id = $(this).attr("element-id");
        if(isPlaying()&& !isPlayingAudio()){
            validateElement(element_id);
        }
    })
});
