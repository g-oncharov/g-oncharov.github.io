"use strict"

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
        document.querySelector('.effect-image-preview').style.filter = `invert(10px)`;
        filterHandler('blur', 'px');
      }else if (evt.target.classList.contains('upload-effect-heat')) {
        document.querySelector('.effect-image-preview').style.filter = `brightness(1.5)`;
        filterHandler('brightness', '');
      }
    }
  });
}

filterfx();
