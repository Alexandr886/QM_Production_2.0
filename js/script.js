//Бургер меню
const header = document.querySelector('#header');
const humb = document.querySelector('#humb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#nav').cloneNode(1); //клонируем навигацию

//Клик на бургере
humb.addEventListener('click', openPopup);

function openPopup(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
    humb.classList.toggle('active');
    header.classList.toggle('active');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu); //добавляем склонированную навигацию
    //Убираем все классы, чтобы при клике в бургере на ссылки юзер скроллился и бургер закрывался
    let navLinks = document.querySelectorAll('.nav__link');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            popup.classList.remove('open');
            document.body.classList.remove('no-scroll');
            humb.classList.remove('active');
            header.classList.remove('active');
        });
    }
}




// document.addEventListener('DOMContentLoaded', function() {
//     window.addEventListener('scroll', function() {
//         const figureFixed = document.querySelector('.figure-one');
//         let rect = figureFixed.getBoundingClientRect();
//         // if (rect.top <= 0) {
//         //     figureFixed.classList.add('fixed');
//         // }
//         console.log(rect.top);
//         if (rect.top <= 0) {
//             figureFixed.classList.add('fixed');
//         } else if (rect.top < 0) {
//             figureFixed.classList.add('fixed');
//         }
//     })
// })