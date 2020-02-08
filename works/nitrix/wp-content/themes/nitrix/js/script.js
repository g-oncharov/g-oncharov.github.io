window.onload = function() {

document.querySelector('.button-popup').addEventListener('click', openPopUp);
document.querySelector('.close').addEventListener('click', closePopUp);
document.querySelector('.block').addEventListener('click', closePopUp);

function openPopUp() {
  document.querySelector('.pop-up').classList.add('showed');
}

function closePopUp() {
  document.querySelector('.pop-up').classList.remove('showed');
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    closePopUp();
  }
});

document.querySelector('.button-rules').addEventListener('click', function() {
  document.querySelector('.left-column').style.transform = 'translateX(-250px)';
  document.querySelector('.right-column').style.transform = 'translateX(-250px)';
});
document.querySelector('.button-confirm').addEventListener('click', function() {
  document.querySelector('.left-column').style.transform = 'translateX(0px)';
  document.querySelector('.right-column').style.transform = 'translateX(0px)';
});

};
