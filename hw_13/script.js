const imagesList = [...document.querySelector('.gallery').children];
const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("prev_btn");

const findActiveElement = (arr) => {
    return arr.indexOf(arr.find((el) => el.classList.contains('active')));
}

const showNextImage = () => {
    let counter = findActiveElement(imagesList);
    if (counter !== imagesList.length - 1 ) {
        imagesList[counter].classList.remove('active');
        imagesList[counter + 1].classList.add('active');
    } else {
        imagesList[counter].classList.remove('active');
        imagesList[0].classList.add('active');
    }
}

const showPrevImage = () => {
    let counter = findActiveElement(imagesList);
    if (counter !== 0) {
        imagesList[counter].classList.remove('active');
        imagesList[counter - 1].classList.add('active');
    } else {
        imagesList[counter].classList.remove('active');
        imagesList[imagesList.length - 1].classList.add('active');
    }
}

nextBtn.addEventListener("click", showNextImage)
prevBtn.addEventListener("click", showPrevImage)