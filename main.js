setTimeout(function () {
    alert('Make sure that you\'ve turned off the UNIKEY to use the keyboard')
}, 1000)

var numberOfDrumButtons = document.querySelectorAll('.drum').length

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    });

}

document.addEventListener('keypress', function(e) { // cả cái document gọi sự kiện keypress
 // muốn biết cái event của keypress có những pthuc method j thì console.log(e) ra để xem

    makeSound(e.key)
    buttonAnimation(e.key)

    // khi bấm phím nhớ tắt unikey, ví dụ chữ w mà để unikey sẽ thành ư => báo lỗi
});

function makeSound(key) {
    switch (key) {
        case 'w': 
            playSound("./assets/sounds/tom-1.mp3");
            break;
        case 'a': 
            playSound("./assets/sounds/tom-2.mp3")
            break;
        case 's': 
            playSound("./assets/sounds/tom-3.mp3")
            break;
        case 'd': 
            playSound("./assets/sounds/tom-4.mp3")
            break;
        case 'j': 
            playSound("./assets/sounds/snare.mp3")
            break;
        case 'k': 
            playSound("./assets/sounds/crash.mp3")
            break;
        case 'l': 
            playSound("./assets/sounds/kick-bass.mp3")
            break;
    }
}

function playSound(link) {
    var sound = new Audio(link);
    sound.play();

    sound.onended = function(){
        this.currentSrc = null;
        this.src = "";
        this.srcObject = null;
        this.remove();
    };

    // fix lỗi Blocked attempt to create a WebMediaPlayer as there are too many WebMediaPlayers already in existence
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey)
    activeButton.classList.add('pressed')

    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100)
}