let menu = document.getElementById('button');
let dropup = document.getElementById('dropup');

let rot = 0 // 0 se è un +, 1 se è un X

menu.addEventListener('click', () => {
    console.log("ok");
    dropup.style.display = "block";
    dropup.style.backgroundColor = "red";
    dropup.style.marginRight = "25px";
    if(rot === 0){
        menu.style.animation = "rotateRight1 0.75s";
        menu.style.rotate = "-135deg";
        dropup.style.animation = "dropup 0.75s";
        menu.style.zIndex = 300;
        dropup.style.transform = "translateY(0%)";
        dropup.style.transform = "translateX(2%)";
        rot = 1;
    }
    else{
        menu.style.animation = "rotateRight2 0.75s";
        menu.style.rotate = "0deg";
        menu.style.zIndex = 300;
        dropup.style.animation = "dropdown 0.75s";
        dropup.style.transform = "translateY(150%)";
        rot = 0;
    }
    
    
});