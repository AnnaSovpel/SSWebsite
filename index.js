// БУРГЕР-МЕНЮ
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.burger-container').classList.toggle('burger-container__display');
})

// ВРАЩЕНИЕ КОЛЁС ПО КЛИКУ
const SmallWheel = document.getElementById('small-wheel-1');
const SmallWheel2 = document.getElementById('small-wheel-2');
const SmallWheel3 = document.getElementById('small-wheel-3');
const SmallWheel4 = document.getElementById('small-wheel-4');
const SmallWheel5 = document.getElementById('small-wheel-5');
const SmallWheel6 = document.getElementById('small-wheel-6');
const Playeer = new Audio('./img/gaz.mp3');
function RotateSmallWheel() {
    SmallWheel.classList.toggle('small-wheel-background__rotate');
}
function RotateSmallWheel2() {
    SmallWheel2.classList.toggle('small-wheel-background__rotate');
}
function RotateSmallWheel3() {
    SmallWheel3.classList.toggle('small-wheel-background__rotate');
}
function RotateSmallWheel4() {
    SmallWheel4.classList.toggle('small-wheel-background__rotate');
}
function RotateSmallWheel5() {
    SmallWheel5.classList.toggle('small-wheel-background__rotate');
}
function RotateSmallWheel6() {
    SmallWheel6.classList.toggle('small-wheel-background__rotate');
}

function PlayPlayeer() {
    Playeer.play();
}
SmallWheel.addEventListener('click', RotateSmallWheel);
SmallWheel.addEventListener('click', PlayPlayeer);
SmallWheel2.addEventListener('click', RotateSmallWheel2);
SmallWheel2.addEventListener('click', PlayPlayeer);
SmallWheel3.addEventListener('click', RotateSmallWheel3);
SmallWheel3.addEventListener('click', PlayPlayeer);
SmallWheel4.addEventListener('click', RotateSmallWheel4);
SmallWheel4.addEventListener('click', PlayPlayeer);
SmallWheel5.addEventListener('click', RotateSmallWheel5);
SmallWheel5.addEventListener('click', PlayPlayeer);
SmallWheel6.addEventListener('click', RotateSmallWheel6);
SmallWheel6.addEventListener('click', PlayPlayeer);
