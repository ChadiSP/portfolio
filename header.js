const execs=document.querySelector('#outer-border')
const slider=document.querySelector('#circle')
var sw=false
var audio = new Audio('click.mp3');
execs.addEventListener('click',function(){
    audio.play();
    if (sw==false){
        slider.classList.toggle('isactive');
        document.body.classList.toggle("dark-theme")
        sw=true
    }
    else{
        slider.classList.toggle('inactive');
        document.body.classList.toggle("light-theme")
        
    }
})