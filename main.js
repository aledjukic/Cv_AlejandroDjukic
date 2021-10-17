// Hero 

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide img');
    // Buttons
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
    // Counter
let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImg.length - 1) return;
    carouselSlide.style.transition = "transform 0.4 ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' 
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4 ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' 
})

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImg[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' 

    }

    if(carouselImg[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)' 

    }
})

// Skills 

document.querySelector('#boton').addEventListener('click', Datos);

function Datos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'skills.json', true)
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of datos) {
                res.innerHTML += `
                <tr>
                    <td>${item.title}</td>
                    <td>${item.level}</td>
                </tr>
                `
            }

        }
    }

}

