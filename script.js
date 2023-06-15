const imgs1 = document.getElementById("carroselImg1");
const img1 = document.querySelectorAll("#carroselImg1 img");

let idx1 = 0;


function carrosel1() {

    if (idx1 > img1.length - 1) {
        idx1 = 0;
        carrosel1();
    } else {
        imgs1.style.transform = `translateX(${-idx1 * 100}%)`;
        idx1++;
    }
}

setInterval(carrosel1, 13000);



const imgs2 = document.getElementById("img2");
const img2 = document.querySelectorAll("#img2 img");

let idx = 0;

function carrosel2() {
   

    if (idx > img2.length - 1) {
        idx = 0;
        carrosel2();
    } else {
        imgs2.style.transform = `translateX(${-idx * 100}%)`;
        idx++;
    }
}

setInterval(carrosel2, 7000);



const imgs3 = document.getElementById("img3");

const img3 = document.querySelectorAll("#img3 img");
let idx3 = 0;

function carrosel3() {
    

    if (idx3 > img3.length - 1) {
        idx3 = 0;
        carrosel3();
    } else {
        imgs3.style.transform = `translateX(${-idx3 * 100}%)`;
        idx3++;
    }
}

setInterval(carrosel3, 7000);





const btn1action = document.querySelector(".btn1");

btn1action.addEventListener('click', function () {

    if (btn1action.textContent == "Ausente") {
        btn1action.innerHTML = "Presente";
        btn1action.style.background = 'green';

    } else {
        btn1action.innerHTML = "Ausente";
        btn1action.style.background = 'red';
    }

})



const btn2action = document.querySelector(".btn2");

btn2action.addEventListener('click', function () {

    if (btn2action.textContent == "Ausente") {
        btn2action.innerHTML = "Presente";
        btn2action.style.background = 'green';

    } else {
        btn2action.innerHTML = "Ausente";
        btn2action.style.background = 'red';
    }

})


function showTime() {


    var dt = new Date();

    var day = String(dt.getDate()).padStart(2, '0');
    var mon = String(dt.getMonth() + 1).padStart(2, '0');
    var yer = String(dt.getFullYear());

    const hr = String(dt.getHours()).padStart(2, '0');
    const min = String(dt.getMinutes()).padStart(2, '0');
    const sec = String(dt.getSeconds()).padStart(2, '0');

    const data = document.querySelector("#dt");
    data.innerHTML = `${day}/${mon}/${yer}`;

    const hora = document.querySelector("#hr");
    hora.innerHTML = `${hr}:${min}:${sec}`;
}

setInterval(showTime, 1000);


