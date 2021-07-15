// БУРГЕР-МЕНЮ
document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.burger-container').classList.toggle('burger-container__display');
})

//ПРОКРУТКА ДИСКОВ И ПЕРЕХОД ПО ССЫЛКЕ
const links = document.getElementsByClassName("a");
nav = document.getElementById('container');
const Playeer = new Audio('./img/gaz.mp3');
nav.onclick = function () { Playeer.play(); }
for (var i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener("click", function (e) {
        e.preventDefault();
        var href = this.href,
            position = 0,
            nav = document.getElementById('container'),
            animate = function () {
                position += 1;
                nav.classList.add('small-wheel-background__rotate');

                if (position == 300) {
                    clearInterval(containerId);
                    window.location = href;
                }
            }
        var containerId = setInterval(animate, 5);
    }, false);
}

const link1 = document.getElementsByClassName("a-1");
nav1 = document.getElementById('container-1');
const Playeer1 = new Audio('./img/gaz.mp3');
nav1.onclick = function () { Playeer1.play(); }
for (var i = 0, len1 = link1.length; i < len1; i++) {
    link1[i].addEventListener("click", function (e) {
        e.preventDefault();
        var href = this.href,
            position = 0,
            nav1 = document.getElementById('container-1'),
            animate = function () {
                position += 1;
                nav1.classList.add('small-wheel-background__rotate');

                if (position == 300) {
                    clearInterval(containerId);
                    window.location = href;
                }
            }
        var containerId = setInterval(animate, 5);
    }, false);
}


const link2 = document.getElementsByClassName("a-2");
nav2 = document.getElementById('container-2');
const Playeer2 = new Audio('./img/gaz.mp3');
nav2.onclick = function () { Playeer2.play(); }
for (var i = 0, len2 = link2.length; i < len2; i++) {
    link2[i].addEventListener("click", function (e) {
        e.preventDefault();
        var href = this.href,
            position = 0,
            nav2 = document.getElementById('container-2'),
            animate = function () {
                position += 1;
                nav2.classList.add('small-wheel-background__rotate');

                if (position == 300) {
                    clearInterval(containerId);
                    window.location = href;
                }
            }
        var containerId = setInterval(animate, 5);
    }, false);
}


const link3 = document.getElementsByClassName("a-3");
nav3 = document.getElementById('container-3');
const Playeer3 = new Audio('./img/gaz.mp3');
nav3.onclick = function () { Playeer3.play(); }
for (var i = 0, len3 = link3.length; i < len3; i++) {
    link3[i].addEventListener("click", function (e) {
        e.preventDefault();
        var href = this.href,
            position = 0,
            nav3 = document.getElementById('container-3'),
            animate = function () {
                position += 1;
                nav3.classList.add('small-wheel-background__rotate');

                if (position == 300) {
                    clearInterval(containerId);
                    window.location = href;
                }
            }
        var containerId = setInterval(animate, 5);
    }, false);
}


const link4 = document.getElementsByClassName("a-4");
nav4 = document.getElementById('container-4');
const Playeer4 = new Audio('./img/gaz.mp3');
nav4.onclick = function () { Playeer4.play(); }
for (var i = 0, len4 = link4.length; i < len4; i++) {
    link4[i].addEventListener("click", function (e) {
        e.preventDefault();
        var href = this.href,
            position = 0,
            nav4 = document.getElementById('container-4'),
            animate = function () {
                position += 1;
                nav4.classList.add('small-wheel-background__rotate');

                if (position == 300) {
                    clearInterval(containerId);
                    window.location = href;
                }
            }
        var containerId = setInterval(animate, 5);
    }, false);
}


const link5 = document.getElementsByClassName("a-5");
nav5 = document.getElementById('container-5');
const Playeer5 = new Audio('./img/gaz.mp3');
nav5.onclick = function () { Playeer5.play(); }
for (var i = 0, len5 = link5.length; i < len5; i++) {
    link5[i].addEventListener("click", function (e) {
        e.preventDefault();
        var href = this.href,
            position = 0,
            nav5 = document.getElementById('container-5'),
            animate = function () {
                position += 1;
                nav5.classList.add('small-wheel-background__rotate');

                if (position == 300) {
                    clearInterval(containerId);
                    window.location = href;
                }
            }
        var containerId = setInterval(animate, 5);
    }, false);
}