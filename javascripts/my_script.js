
$(document).ready(function() {
    window.audioElements=[];
    var pamElement = document.createElement('audio');
    pamElement.setAttribute('src', 'audio/pam.mp3');
    var pimElement = document.createElement('audio');
    pimElement.setAttribute('src', 'audio/pim.mp3');
    var pomElement = document.createElement('audio');
    pomElement.setAttribute('src', 'audio/pom.mp3');
    var pumElement = document.createElement('audio');
    pumElement.setAttribute('src', 'audio/pum.mp3');

    audioElements.push(pamElement);
    audioElements.push(pimElement);
    audioElements.push(pomElement);
    audioElements.push(pumElement);
    

    $.get();

    $('.tile').click(function(){
        var element_id = $(this).attr("element-id");
        if(isPlaying()){
            validateElement(element_id);
        }
    })
});
