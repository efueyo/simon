
$(document).ready(function() {
    var pamElement = document.createElement('audio');
    pamElement.setAttribute('src', 'audio/pam.mp3');
    var pimElement = document.createElement('audio');
    pimElement.setAttribute('src', 'audio/pim.mp3');
    var pomElement = document.createElement('audio');
    pomElement.setAttribute('src', 'audio/pom.mp3');
    var pumElement = document.createElement('audio');
    pumElement.setAttribute('src', 'audio/pum.mp3');
    //audioElement.load()

    $.get();

    $('.pam').click(function() {
        pamElement.play();
    });
    $('.pim').click(function() {
        pimElement.play();
    });
    $('.pom').click(function() {
        pomElement.play();
    });
    $('.pum').click(function() {
        pumElement.play();
    });
});
