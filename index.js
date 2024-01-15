let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p1 = document.querySelector(".p1");
let btn = document.querySelector("button");

document.addEventListener("keyup", (e) => {
    p1.style.display = "none";
    p2.innerHTML = `You pressed ${e.key}`;
    p3.innerHTML = `${e.keyCode}`
    p2.classList.add("p2");
    p3.classList.add("p3");
});

