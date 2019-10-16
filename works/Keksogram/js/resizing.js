"use strict"

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
