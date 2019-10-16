"use strict"

let arrPhotoInformation = [];
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const arrayDescription = [
 "Моя любимая фотография!",
 "Идеальный день.",
 "Что вы об этом думаете?",
 "Угадайте, где я",
 "Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
 "Моя жизнь – мои правила",
 "Только найдя себя, можно поменять жизнь.",
 "Бывают дни, которые начинаются лучше, чем другие",
 "Оставайтесь собой",
 "Что же такое искусство?",
 "Как у вас дела?",
 "Верь в чудо — оно существует",
 "Любите себя и мир полюбит вас.",
 "Хотя дорога была скалистой, мне все равно",
 "Жизнь — это самая приятная коллекция счастливых моментов"
];

let obj = {};
let photoNum;
let backgroundIndex = 1;

const openPopup = (selector) => {
  document.querySelector(selector).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

const closePopup = (selector) => {
  document.querySelector(selector).classList.add('hidden');
  document.body.style.overflow = 'auto';
}

let corX;
let corX1percent;
let numberPercent;
