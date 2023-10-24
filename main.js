const numbersContainer = document.querySelector("#numbers");

const createCircle = (number) => {
    let circle = document.createElement("div");
    circle.setAttribute("class", "numberCircle");
    circle.innerText = number;
    return circle;
}

const fillNumbers = () => {
    let initialValue = 1;
    let interval = setInterval(()=>{
        let circle = createCircle(initialValue++);
        numbersContainer.appendChild(circle);
        if(initialValue === 16){
            clearInterval(interval);
        }
    },300)
}

window.onload = () => {
    fillNumbers();
}