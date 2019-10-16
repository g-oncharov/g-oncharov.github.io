"use strict"

const validation = (evt) => {
  let strHashtag = document.querySelector('.upload-form-hashtags');
  let arr = strHashtag.value.split(' ');
  let regEx = /#[a-z] |#[a-z0-9]/;
    for (let i = 0; i < arr.length; i++) {
      if (regEx.test(arr[i]) == false && arr[i] != '') {
      strHashtag.classList.add('upload-form-hashtags--invalid');
        alert("Ошибка !\nВведите хеш-теги в правильном формате!");
        evt.preventDefault();
      }
  }
}
