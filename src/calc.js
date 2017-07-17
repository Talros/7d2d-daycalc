"use strict";
(function() {
  document.addEventListener("DOMContentLoaded", function() {

    var currentDayEl = document.getElementById('current-day');
    var formCalcEl = document.getElementById('form-calculate');
    var resetEl = document.getElementById('btn-reset');
    var daysLeftEl = document.getElementById('result-days-left');
    var messageEl = document.getElementById('result-message');

    function remainingDays(day) {
      if (day < 1)
        return day;

      return 7 - (day % 7);
    }

    function handleDisplayMessage(daysLeft) {
      if (daysLeft < 1 || Number.isNaN(daysLeft)) {
        currentDayEl.className = "INVALID";
        messageEl.className = "";
        return "Please enter a positive number above zero.";
      }

      if (daysLeft >= 7) {
        currentDayEl.className = "";
        messageEl.className = "GETREADY";
        return "It's tonight! GET READY!";
      }

      currentDayEl.className = "";
      messageEl.className = "";
      return "";
    }

    function submitCalculation(e) {
      e.preventDefault();

      var currentDay = currentDayEl.value;
      currentDay = parseInt(currentDay);

      daysLeftEl.innerText = remainingDays(currentDay);
      messageEl.innerText = handleDisplayMessage(remainingDays(currentDay));;
    }

    formCalcEl.onsubmit = submitCalculation;


    resetEl.addEventListener('click', function(e) {
      e.preventDefault();
      currentDayEl.className = "";
      messageEl.className = "";
      currentDayEl.value = "";
      daysLeftEl.innerText = "N/A";
      messageEl.innerText = "";
    });

  });
})()