(function() {
  var arrival = new Date('June 16, 2016 13:00:00');
  var total = arrival.getTime() - new Date('November 1, 2015 07:00:00').getTime();
  var left = Math.round(100 * (arrival.getTime() - Date.now())/total);

  var progressBar = document.getElementById('leftProgress');
  var progressSpan = document.getElementById('leftValue');
  progressBar.setAttribute('value', 100 - left);
  progressSpan.innerHTML = '';
  progressSpan.appendChild(document.createTextNode(left + '% left'));
})();
