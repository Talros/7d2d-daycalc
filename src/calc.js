"use strict";
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var currentDayEl = document.getElementById('current-day');
    var calcBtnEl = document.getElementById('btn-calculate');
    var daysLeftEl = document.getElementById('days-left');

    calcBtnEl.addEventListener('click', function(e) {
      var currentDay = currentDayEl.value;
      currentDay = parseInt(currentDay);
      if (!currentDay) daysLeftEl.innerText = "Enter the current day and click Calculate.";
      var daysLeft = 7 - (currentDay % 7)
      var message = daysLeft === 7 ? "It's tonight! GET READY!" : 'Days Left: ' + daysLeft;
      daysLeftEl.innerText = message;
    });
  });
})()