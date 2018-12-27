document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("change_heading").innerHTML = "Hello World!";

    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "purple");
    document.querySelector("section").appendChild(newDiv);


    document.querySelectorAll("section div").forEach(element => {
        element.addEventListener("mouseover", function () {
            document.querySelector(".selected").innerHTML = element.className;
        });
    });

    let car1 = document.getElementById("car1");
    let car2 = document.getElementById("car2");
    let button = document.getElementById("startRace");

    function reset() {
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }

    button.addEventListener("click", function () {
        button.disabled = true;

        car1.style.marginLeft=0 + "px";
        car1.timer = setInterval(function() {
            car1.style.marginLeft= parseInt(car1.style.marginLeft) + Math.random() * 50 + "px";
            if(parseInt(car1.style.marginLeft)>=window.innerWidth-50) {
                reset();
                alert("Car 1 is Winner!");
            } 
        }, 100);

        car2.style.marginLeft=0 + "px";
        car2.timer = setInterval(function() {
            car2.style.marginLeft= parseInt(car2.style.marginLeft) + Math.random() * 50 + "px";
            if(parseInt(car2.style.marginLeft)>=window.innerWidth-50) {
                reset();
                alert("Car 2 is Winner!");
            } 
        }, 100);
    });
});