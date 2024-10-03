'use strict';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

const getRandomImage = (imagesArray) => {
    const randomImgIndex = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomImgIndex];
}

const randomImage = () => {
    const randomImg = getRandomImage(images);
    const imgPath = `./images/${randomImg}`;
    const resultImg = document.createElement('img');
    resultImg.src = imgPath;
    document.body.append(resultImg);
}

randomImage();





