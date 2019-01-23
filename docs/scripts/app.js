document.querySelectorAll('li')[0].addEventListener('animationend',
  function (e) {
    document.querySelectorAll('li')[1].style.animationName = 'orange';
  },
  false);