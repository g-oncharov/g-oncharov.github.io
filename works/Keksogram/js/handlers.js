"use strict"

document.querySelector("#upload-file").addEventListener('change', readURL);
document.querySelector("#upload-file").addEventListener('change', () => openPopup('.upload-overlay'));
document.querySelector('.upload-resize-controls-button-inc').addEventListener('click', () => imgSizeOp('plus'));
document.querySelector('.upload-resize-controls-button-dec').addEventListener('click', () => imgSizeOp('minus'));

document.querySelector('.gallery-overlay-close').addEventListener('click', () => closePopup('.gallery-overlay'));
document.querySelector('#upload-cancel').addEventListener('click', () => closePopup('.upload-overlay'));
document.querySelector('.upload-form-submit').addEventListener('click', validation);
