"use strict";
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var currentDayEl = document.getElementById('current-day');
    var formCalcEl = document.getElementById('form-calculate');
    var daysLeftEl = document.getElementById('days-left');

    function remainingDays(day) {
      if (day < 1) return day;
      return 7 - (day % 7);
    }

    function displayMessage(daysLeft) {
      if (daysLeft < 1 || Number.isNaN(daysLeft)) {
        return "Please enter a positive number above zero.";
      }

      if (daysLeft >= 7) return "It's tonight! GET READY!";

      return "Days Left: " + daysLeft;
    }

    function submitCalculation(event) {
      event.preventDefault();
      var currentDay = currentDayEl.value;
      currentDay = parseInt(currentDay, 10);
      if (!currentDay) daysLeftEl.innerText = "Enter the current day and click Calculate.";
      var message = displayMessage(remainingDays(currentDay));
      daysLeftEl.innerText = message;
    }

    formCalcEl.onsubmit = submitCalculation;
  });
})()