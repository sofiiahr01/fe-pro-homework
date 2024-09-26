'use strict';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const randomImgIndex = Math.floor(Math.random() * images.length);
const randomImg = images[randomImgIndex];
const imgPath = `./images/${randomImg}`;
const resultImg = document.createElement('img');
resultImg.src = imgPath;
document.body.appendChild(resultImg);




