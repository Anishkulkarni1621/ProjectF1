document.querySelector(".w").addEventListener("click", onlick1);
function onlick1() {
    buttonAnimation("w");
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
    
}
document.querySelector(".s").addEventListener("click", onlick2);
function onlick2() {
    buttonAnimation("s");
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
    
}
document.querySelector(".a").addEventListener("click", onlick3);
function onlick3() {
    buttonAnimation("a");
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
    
}
document.querySelector(".d").addEventListener("click", onlick4);
function onlick4() {
    buttonAnimation("d");
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    
}
document.querySelector(".j").addEventListener("click", onlick5);
function onlick5() {
    buttonAnimation("j");
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
    
}
document.querySelector(".k").addEventListener("click", onlick6);
function onlick6() {
    buttonAnimation("k");
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
    
}
document.querySelector(".l").addEventListener("click", onlick7);
function onlick7() {
    buttonAnimation("l");
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
    
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
switch(key){
    case "w":
   var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
    break;
    case "s":
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
    break;
    case "a":
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
    break;  
    case "d":
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    break;     
    case "j":
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
    break;
    case "k":
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
    break;  
    case "l":
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
    break;  
    default:
        console.log("wrong key");
        break;
}}
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
},70);}
