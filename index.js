let len = document.querySelectorAll(".drum");
// let audios = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];

for(let i=0;i<len.length;i++){
    len[i].addEventListener("click",function (){
        let pressed = this.innerHTML;
        makeSound(pressed);
        animate(pressed);

    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animate(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            let toms1 = new Audio("sounds/tom-1.mp3");
            toms1.play();
            break;
        case "e":
            let toms2 = new Audio("sounds/tom-2.mp3");
            toms2.play();
            break;
        case "r":
            let toms3 = new Audio("sounds/tom-3.mp3");
            toms3.play();
            break;
        case "t":
            let toms4 = new Audio("sounds/tom-4.mp3");
            toms4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(pressed);
    }
}

function animate(keypressed){
    document.querySelector("."+keypressed).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("."+keypressed).classList.remove("pressed");
    }, 100);
}
// this.style.color="red";
// let audio = new Audio(audios[i]);
// audio.play();