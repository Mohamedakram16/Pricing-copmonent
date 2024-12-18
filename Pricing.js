let toggle = document.getElementById("circle");
let ball = circle.children[0];
let prices = document.getElementsByClassName("dollars");
let prices0 = document.getElementById("dollars");
toggle.addEventListener("click", function(){
    if (ball.getAttribute("id") == "ball") {
        this.style.backgroundImage = "none";
        this.style.backgroundColor = "hsl(234, 14%, 74%)";
        ball.style.transform = "translateX(24px)";
        ball.setAttribute("class", "month");
        prices[0].textContent = "$ 19.99";
        prices[1].textContent = "$ 39.99";
        prices0.textContent = "$ 24.99";
        ball.removeAttribute("id");
    } else {
        ball.setAttribute("id", "ball")
        this.style.backgroundColor = "hsl(237, 63%, 64%)";
        ball.style.transform = "translateX(0px)";
        prices[0].textContent = "$ 199.99";
        prices[1].textContent = "$ 249.99";
        prices0.textContent = "$ 399.99";
    }
});