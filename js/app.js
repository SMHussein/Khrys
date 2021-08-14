const arrows = document.querySelectorAll(".feedback__arrow");
const imgs = document.querySelectorAll(".feedback__figure");
const textSlides = document.querySelectorAll(".feedback__text__slide");

let count = 0;

const handleClick = function(){
    if(this.classList.contains("feedback__arrow--left")){
        for(let img of imgs){
            img.classList.remove("figure__active");
        }
        for(let slide of textSlides){
            slide.classList.remove("text__active");
        }
        if(count == 0){
            count = 2
        }else{
            count--;
        }

        imgs[count].classList.add("figure__active");
        textSlides[count].classList.add("text__active");
    }else{
        for(let img of imgs){
            img.classList.remove("figure__active");
        }
        for(let slide of textSlides){
            slide.classList.remove("text__active");
        }
        if(count == 2){
            count = 0
        }else{
            count++;
        }

        imgs[count].classList.add("figure__active");
        textSlides[count].classList.add("text__active");
    }
}

for(let i=0; i < 2; i++){
arrows[i].addEventListener("click",handleClick)
}



// CALENDER CODE ******************************************

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".calender__days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".calender__date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".calender__date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();


// on scroll change fixed navigator class

let mainNavLinks = document.querySelectorAll(".nav__fixed__link");


for (let i of mainNavLinks) {
    i.addEventListener("click", function (e) {
        for (let i of mainNavLinks) {
            i.classList.remove("active-navigator")
        }
        this.classList.add("active-navigator");

    })
}

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active-navigator");
        } else {
            link.classList.remove("active-navigator");
        }
    });
});


//GALLERY FUNCTIONALITY ***********

const gallery = document.querySelectorAll(".portfolio__gallery__item");
let expandButton = document.querySelector(".portfolio__nav__icon");


expandButton.addEventListener("click",function(){
    for(let img of gallery){
        img.classList.toggle("extend__portfolio");
    }
    expandButton.classList.toggle("icon__rotate");
})
