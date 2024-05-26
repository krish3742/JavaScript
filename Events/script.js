let btn = document.querySelector("button");
let div = document.querySelector("div");

// btn.onclick = (e) => {
//     div.style.backgroundColor = "black";
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

// div.onmouseover = (e) => {
//     div.style.transform = "translate(50px)";
//     div.style.transition = "transform 5s ease-in .2s";
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

btn.addEventListener("click", () => {
    div.style.backgroundColor = "black";
    div.innerText = "I'm single clicked";
    div.style.color = "white";
})

btn.addEventListener("dblclick", () => {
    div.style.backgroundColor = "pink";
    div.innerText = "I'm double clicked";
    div.style.color = "brown";
})