let imageindex =0;
let images = document.getElementsByClassName('images');
let iconleft = document.querySelector('.icon-left');
let iconright = document.querySelector('.icon-right');

for (const element of images) {
    element.style.display = 'none';
    
}

images[imageindex].style.display = 'block';
iconleft.addEventListener('click', function () { 
    images[imageindex].style.display = 'none';
    imageindex--;
    if (imageindex < 0) {
        imageindex = images.length - 1;
    }
    images[imageindex].style.display = 'block';
})
iconright.addEventListener("click",function () {
    images[imageindex].style.display = 'none';
    imageindex++;
    if (imageindex > images.length - 1) {
        imageindex = 0;
    }
    images[imageindex].style.display = 'block';
})