let add_90 = document.getElementById("rotate-add-90");
let add_45 = document.getElementById("rotate-add-45");
let sub_90 = document.getElementById("rotate-sub-90");
let sub_45 = document.getElementById("rotate-sub-45");
let reset = document.getElementById("rotate-reset");

let circle = document.getElementById("circle");
let rotation = 0

function rotateCircle(step){
    rotation += step;
    circle.style.transform = `rotate(${rotation}deg)`;
}
 
add_90.addEventListener("click", () => rotateCircle(90));
add_45.addEventListener("click", () => rotateCircle(45));
sub_90.addEventListener("click", () => rotateCircle(-90));
sub_45.addEventListener("click", () => rotateCircle(-45));

reset.addEventListener("click", () => {
    rotation = 0; 
    circle.style.transform = `rotate(0 deg)`;
});
