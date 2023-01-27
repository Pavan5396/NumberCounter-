

const num = document.querySelector('.number');
const button = document.querySelector('.btn');


button.addEventListener('click', (e) => {
    if (e.target.classList.contains("increase")) {
        num.innerHTML++;
        letColor()
    }

    if (e.target.classList.contains("decrease")) {
        num.innerHTML--;
        letColor()
    }

    if (e.target.classList.contains("reset")) {
        num.innerHTML = 0;
        letColor()

    }



})


function letColor() {

    if (num.innerHTML > 0) {
        num.style.color = "rgb(50, 150, 25)";
    }
    else if (num.innerHTML < 0) {
        num.style.color = "rgb(250, 50, 25)";

    }

    else {
        num.style.color = "rgb(0, 0, 0)";

    }
}



