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
    console.log(1);
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
        filterHandler('grayscale', '%');
      }else if (evt.target.classList.contains('upload-effect-sepia')) {
        filterHandler('sepia', '%');
      }else if (evt.target.classList.contains('upload-effect-marvin')) {
        filterHandler('invert', '%');
      }else if (evt.target.classList.contains('upload-effect-phobos')) {
        filterHandler('blur', 'px');
      }else if (evt.target.classList.contains('upload-effect-heat')) {
        filterHandler('brightness', '');
      }
    }
  });
}

filterfx();
