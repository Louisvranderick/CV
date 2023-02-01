import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.titlediv', {
    // Waits 1000ms after typing "First"
    strings: ['First ^1000 sentence.', 'Second sentence.']
  });
