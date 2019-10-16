"use strict"

function readURL(evt) {
    if (this.files && this.files[0]) {
        let reader = new FileReader();
        reader.addEventListener('load', (evt) => {
          document.querySelector('.effect-image-preview').src = evt.target.result;
          setTimeout(imgSize,1)
        });
        reader.readAsDataURL(this.files[0]);
    }
}
