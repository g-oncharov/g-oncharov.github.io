"use strict"

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
