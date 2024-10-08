function reduceOpacity() {
  let ima = document.querySelector("#square");
  ima.style.opacity = "0.5";
}

function resetOpacity() {
  let ima = document.querySelector("#square");
  ima.style.opacity = "1";
}

let ima = document.querySelector("#square");
ima.addEventListener("mouseover", reduceOpacity);
ima.addEventListener("mouseout", resetOpacity);
