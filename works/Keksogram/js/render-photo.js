"use strict"
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
