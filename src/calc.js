"use strict";
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var currentDayEl = document.getElementById('current-day');
    var calcBtnEl = document.getElementById('btn-calculate');
    var resetEl = document.getElementById('btn-reset');
    var daysLeftEl = document.getElementById('result-days-left');
    var messageEl = document.getElementById('result-message');

    calcBtnEl.addEventListener('click', function(e) {
      var currentDay = currentDayEl.value,
          currentDayElClasses,
          message,
          messageElClasses,
          daysLeft;

      currentDay = parseInt(currentDay);

      if (!currentDay) {
        daysLeft = "N/A";
        message = "ERROR: Enter the current day and click Calculate.";
        messageElClasses = "";
        currentDayElClasses = "INVALID";
      } else {
        daysLeft = 7 - (currentDay % 7)
        message = daysLeft === 7 ? "It's tonight! GET READY!" : "";
        messageElClasses = "GETREADY";
        currentDayElClasses = "";
      }
      
      currentDayEl.className = currentDayElClasses;
      daysLeftEl.innerText = daysLeft;
      messageEl.innerText = message;
      messageEl.className = messageElClasses;
    });

    resetEl.addEventListener('click', function(e) {
      currentDayEl.value = "";
      daysLeftEl.innerText = "N/A";
      messageEl.innerText = "";
    });

  });
})()