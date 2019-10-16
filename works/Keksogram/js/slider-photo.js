"use strict"

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
      })
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.querySelector('.upload-effect-level').removeEventListener('mousemove', onMouseMove);
      document.querySelector('.upload-effect-level').removeEventListener('mouseup', onMouseUp);
    };

    document.querySelector('.upload-effect-level').addEventListener('mousemove', onMouseMove);
    document.querySelector('.upload-effect-level').addEventListener('mouseup', onMouseUp);
  };
};
sliderMove();
