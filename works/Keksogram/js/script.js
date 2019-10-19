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
  document.body.style.overflowY = 'hidden';
  document.body.style.overflowX = 'hidden';
  document.documentElement.style.overflowY = 'hidden';
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.position = 'relative';
}

const closePopup = (selector) => {
  document.querySelector(selector).classList.add('hidden');
  document.body.style.overflowY = 'auto';
  document.documentElement.style.overflowY = 'auto';
  document.body.style.overflowX = 'hidden';
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.position = 'static';
}

let corX;
let corX1percent;
let numberPercent;

const generatePhotoInformation = () => {
  for (let i = 1; i <= 26; i++) {
    obj = {
      url: `photos/${i}.jpg`,
      likes: random(1,12300),
      comments: random(15,200),
      description: arrayDescription[random(0,13)]
    };
    arrPhotoInformation.push(obj);

    const pictureTemplate = document.querySelector('#picture-template').content;
    pictureTemplate.querySelector('img').src = obj.url;
    pictureTemplate.querySelector('.picture-likes').innerText = obj.likes;
    pictureTemplate.querySelector('.picture-comments').innerText = obj.comments;
    pictureTemplate.querySelector('img').setAttribute('data-number', i);

    document.querySelector('.pictures').addEventListener('click', (evt) => {
      evt.preventDefault();
      if (evt.target.tagName == 'IMG') {
        photoNum = evt.target.getAttribute('data-number') - 1;
        renderPhotos(photoNum);
        openPopup('.gallery-overlay');
      }
    });

    document.querySelector('.pictures').appendChild(pictureTemplate.cloneNode(true));
  }
};
const renderPhotos = (n) => {
  document.querySelector('.gallery-overlay-image').src = arrPhotoInformation[n].url;
  document.querySelector('.likes-count').innerText = arrPhotoInformation[n].likes;
  document.querySelector('.comments-count').innerText = arrPhotoInformation[n].comments;
  document.querySelector('.gallery-overlay-description').innerText = arrPhotoInformation[n].description;
};
generatePhotoInformation();

function readURL(evt) {
    if (this.files && this.files[0]) {
        let reader = new FileReader();
        reader.addEventListener('load', (evt) => {
          document.querySelector('.effect-image-preview').src = evt.target.result;
          setTimeout(imgSize,100)
        });
        reader.readAsDataURL(this.files[0]);
    }
}

let filterSet = (name, unit) => {
   if(unit == '%') {
    document.querySelector('.effect-image-preview').style.filter = `${name}(${numberPercent}${unit})`;
  }else if (unit == 'px') {
    let numberPx = numberPercent / 5;
    document.querySelector('.effect-image-preview').style.filter = `${name}(${numberPx}${unit})`;
  }else if (unit == '') {
    let number = numberPercent / 33;
    document.querySelector('.effect-image-preview').style.filter = `${name}(${number}${unit})`;
  }else if (name == 'none' && unit == '') {
    document.querySelector('.effect-image-preview').style.filter = `opacity(0%)`;
  }
}
let filterHandler = (name, unit) => {
  filterSet(name, unit)
  document.querySelector('.upload-effect-level').addEventListener('click', () => {
  filterSet(name, unit)
  });
}

const filterfx = () => {
  document.querySelector('.upload-effect-controls').addEventListener('click', (evt) => {
    if (evt.target.tagName == 'DIV') {
      if (evt.target.classList.contains('upload-effect-none')) {
        document.querySelector('.effect-image-preview').style.filter = `opacity(100%)`;
        document.querySelector('.upload-effect-level').addEventListener('click', () => {
        document.querySelector('.effect-image-preview').style.filter = `opacity(100%)`;
        });
      }else if (evt.target.classList.contains('upload-effect-chrome')) {
        document.querySelector('.effect-image-preview').style.filter = `grayscale(100%)`;
        filterHandler('grayscale', '%');
      }else if (evt.target.classList.contains('upload-effect-sepia')) {
        document.querySelector('.effect-image-preview').style.filter = `sepia(100%)`;
        filterHandler('sepia', '%');
      }else if (evt.target.classList.contains('upload-effect-marvin')) {
        document.querySelector('.effect-image-preview').style.filter = `invert(100%)`;
        filterHandler('invert', '%');
      }else if (evt.target.classList.contains('upload-effect-phobos')) {
        document.querySelector('.effect-image-preview').style.filter = `blur(10px)`;
        filterHandler('blur', 'px');
      }else if (evt.target.classList.contains('upload-effect-heat')) {
        document.querySelector('.effect-image-preview').style.filter = `brightness(1.5)`;
        filterHandler('brightness', '');
      }
    }
  });
}

filterfx();

const imgSize = () => {
  let photo = document.querySelector('.effect-image-preview');
  photo.setAttribute('width',photo.naturalWidth)
  photo.setAttribute('height',photo.naturalHeight)
}

const imgSizeOp = (v) => {
  let photoW = parseInt(document.querySelector('.effect-image-preview').getAttribute('width'));
  let photoH = parseInt(document.querySelector('.effect-image-preview').getAttribute('height'));
  if (v == 'plus' && photoW <= 700 && photoH <= 600) {
    photoW += (photoW / 100) * 5;
    photoH += (photoH / 100) * 5 ;
  }else if (v == 'minus' && photoW >= 550 && photoH >= 500) {
    photoW -= (photoW / 100) * 5;
    photoH -= (photoH / 100) * 5;
  }
  document.querySelector('.effect-image-preview').setAttribute('width', photoW)
  document.querySelector('.effect-image-preview').setAttribute('height', photoH)
}

const sliderMove = () => {
  const pinHandler = document.querySelector('.upload-effect-level-pin');

  pinHandler.addEventListener('mousedown', onMouseDown);
  function onMouseDown(evt) {
    evt.preventDefault();
    let startCoordsX = evt.clientX;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      let shiftX = startCoordsX - moveEvt.clientX;

      startCoordsX =  moveEvt.clientX;

      if (pinHandler.offsetLeft - shiftX >= 0 && pinHandler.offsetLeft - shiftX <= 450) {

        corX = 0;
        pinHandler.style.left = (pinHandler.offsetLeft - shiftX) + 'px';
        corX = pinHandler.style.left;
        document.querySelector('.upload-effect-level-val').style.width = corX;
        corX = parseInt(corX)
        corX1percent = (450 / 100);
        numberPercent = parseInt(corX / corX1percent);
      }
        filterfx(numberPercent)

      document.querySelector('.upload-effect-level').addEventListener('mouseout',() => {
        document.querySelector('.upload-effect-level').removeEventListener('mousemove', onMouseMove);
        document.querySelector('.upload-effect-level').removeEventListener('touchmove', onMouseMove);
      })
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.querySelector('.upload-effect-level').removeEventListener('mousemove', onMouseMove);
      document.querySelector('.upload-effect-level').removeEventListener('touchmove', onMouseMove);
      document.querySelector('.upload-effect-level').removeEventListener('mouseup', onMouseUp);
    };

    document.querySelector('.upload-effect-level').addEventListener('mousemove', onMouseMove);
    document.querySelector('.upload-effect-level').addEventListener('touchmove', onMouseMove);
    document.querySelector('.upload-effect-level').addEventListener('mouseup', onMouseUp);
  };
};
sliderMove();

const validation = (evt) => {
  evt.preventDefault();
  let strHashtag = document.querySelector('.upload-form-hashtags');
  let arr = strHashtag.value.split(' ');
  let regEx = /#[a-z] |#[a-z0-9]/;
    for (let i = 0; i < arr.length; i++) {
      if (regEx.test(arr[i]) == false && arr[i] != '') {
        strHashtag.classList.add('upload-form-hashtags--invalid');
        alert("Ошибка !\nВведите хеш-теги в правильном формате!");
      }else if (regEx.test(arr[i]) == true || arr[i] == ''){
      	closePopup('.upload-overlay');
      }
  }
}
document.querySelector('.upload-form-submit').addEventListener('click', validation);
const viewImages = () => {
  backgroundIndex++;
    if (backgroundIndex > 3) {
      backgroundIndex = 1;
    }
  document.querySelector('.upload-form').style = `background: url(img/logo-background-${backgroundIndex}.jpg)`;
}

setInterval(function() {
  viewImages();
},3500)

document.querySelector("#upload-file").addEventListener('change', readURL);
document.querySelector("#upload-file").addEventListener('change', () => openPopup('.upload-overlay'));
document.querySelector('.upload-resize-controls-button-inc').addEventListener('click', () => imgSizeOp('plus'));
document.querySelector('.upload-resize-controls-button-dec').addEventListener('click', () => imgSizeOp('minus'));

document.querySelector('.gallery-overlay-close').addEventListener('click', () => closePopup('.gallery-overlay'));
document.querySelector('#upload-cancel').addEventListener('click', () => closePopup('.upload-overlay'));



