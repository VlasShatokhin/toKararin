(function() {
    'use strict';

    const departure = new Date('November 1, 2015 07:00:00')
    const arrival = new Date('June 16, 2016 13:00:00');

    function getProgress(departure, arrival) {
        return Date.now() > arrival.getTime() ? 100 : 
          100 - Math.round(100 * (arrival.getTime() - Date.now())/(arrival.getTime() - departure.getTime()));
    }

    function setProgress(passed) {
        const progressBar = document.getElementById('leftProgress');
        const progressSpan = document.getElementById('leftValue');

        progressBar.setAttribute('value', passed);
        progressSpan.innerHTML = '';
        progressSpan.appendChild(document.createTextNode(passed + '%'));
    }

    setProgress(getProgress(departure, arrival));

})();
