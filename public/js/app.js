'use strict';


requirejs.config({
  paths: {}
});


require([/* Dependencies */], function () {

  var app = {
    initialize: function () {
      var replyBtn = document.querySelector('#reply');
      var forwardBtn = document.querySelector('#forward');
      var moveToBtn = document.querySelector('#moveto');
      var verify = document.querySelector('#verify');
      replyBtn.addEventListener('click', function () {
        verify.innerText += 'reply';
      });
      forwardBtn.addEventListener('click', function () {
        verify.innerText += 'forward';
      });
      moveToBtn.addEventListener('click', function () {
        verify.innerText += 'moveto';
      });
      document.getElementsByTagName('body')[0].setAttribute('data-loaded', true);

    }

  };
  setTimeout(function () {
    app.initialize();
  }, 500);
});
