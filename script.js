window.onload = function () {
  var baseText = 'Hi. I\'m Robert. A ';
  var morphTexts = [
    'full-stack developer.',
    'machine learning enthusiast.',
    'human from planet earth.'
  ];

  var el = document.getElementById('morph-greeting');
  var pauseEmptySteps = 10;
  var pauseFullSteps = 30;
  var insertState = true;
  var morphTextsIndex = 0;
  var pauseCounter = 0;

  var morph = function () {
    if (insertState) {
      if (el.innerHTML.length < baseText.length + morphTexts[morphTextsIndex].length) {
        el.innerHTML += morphTexts[morphTextsIndex][el.innerHTML.length - baseText.length];
      } else {
        if (pauseCounter < pauseFullSteps) {
          pauseCounter++;
        } else {
          pauseCounter = 0;
          insertState = false;
        }
      }
    } else {
      if (el.innerHTML.length > baseText.length) {
        el.innerHTML = el.innerHTML.substr(0, el.innerHTML.length - 1);
      } else {
        if (pauseCounter < pauseEmptySteps) {
          pauseCounter++;
        } else {
          morphTextsIndex = (morphTextsIndex + 1) % morphTexts.length;
          pauseCounter = 0;
          insertState = true;
        }
      }
    }
  };

  el.innerHTML = baseText;
  this.setInterval(morph, 50);
};
