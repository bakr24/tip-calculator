  var tipPercent = 15;
 
    document.getElementById('bill').addEventListener('input', calculate);
    document.getElementById('custom-tip').addEventListener('input', function() {
      var buttons = document.querySelectorAll('.tip-btn');
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      tipPercent = null;
      calculate();
    });
    document.getElementById('people').addEventListener('input', calculate);
 
    function selectTip(value, button) {
      tipPercent = value;
      document.getElementById('custom-tip').value = '';
      document.getElementById('tip-error').textContent = '';
 
      var buttons = document.querySelectorAll('.tip-btn');
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
 
      calculate();
    }
 
    function calculate() {
      var billValue   = document.getElementById('bill').value;
      var peopleValue = document.getElementById('people').value;
      var customTip   = document.getElementById('custom-tip').value;
 
      var bill   = parseFloat(billValue);
      var people = parseInt(peopleValue);
      var tip;
 
      if (customTip !== '') {
        tip = parseFloat(customTip);
      } else {
        tip = tipPercent;
      }
 
      // Validate bill
      if (billValue === '') {
        document.getElementById('bill-error').textContent = '';
      } else if (isNaN(bill) || bill <= 0) {
        document.getElementById('bill-error').textContent = 'Please enter a valid positive amount.';
      } else {
        document.getElementById('bill-error').textContent = '';
      }
 
      // Validate custom tip
      if (customTip !== '') {
        if (isNaN(tip) || tip < 0) {
          document.getElementById('tip-error').textContent = 'Tip cannot be negative.';
        } else if (tip > 100) {
          document.getElementById('tip-error').textContent = 'Tip cannot be more than 100%.';
        } else {
          document.getElementById('tip-error').textContent = '';
        }
      } else {
        document.getElementById('tip-error').textContent = '';
      }
 
      // Validate people
      if (peopleValue === '') {
        document.getElementById('people-error').textContent = '';
      } else if (isNaN(people) || people < 1) {
        document.getElementById('people-error').textContent = 'Please enter a whole number of at least 1.';
      } else {
        document.getElementById('people-error').textContent = '';
      }
 
      // If bill is empty or invalid, stop here
      if (billValue === '' || isNaN(bill) || bill <= 0) {
        document.getElementById('tip-amount').textContent  = 'Rs 0.00';
        document.getElementById('grand-total').textContent = 'Rs 0.00';
        document.getElementById('per-person').textContent  = 'Rs 0.00';
        return;
      }
 
      // If tip is invalid, stop here
      if (tip === null || isNaN(tip) || tip < 0 || tip > 100) {
        document.getElementById('tip-amount').textContent  = 'Rs 0.00';
        document.getElementById('grand-total').textContent = 'Rs 0.00';
        document.getElementById('per-person').textContent  = 'Rs 0.00';
        return;
      }
 
      // Default people to 1 if not entered
      if (peopleValue === '' || isNaN(people) || people < 1) {
        people = 1;
      }
 
      var tipAmount  = bill * tip / 100;
      var grandTotal = bill + tipAmount;
      var perPerson  = Math.ceil((grandTotal / people) * 100) / 100;
 
      document.getElementById('tip-amount').textContent  = 'Rs ' + tipAmount.toFixed(2);
      document.getElementById('grand-total').textContent = 'Rs ' + grandTotal.toFixed(2);
      document.getElementById('per-person').textContent  = 'Rs ' + perPerson.toFixed(2);
    }
 
    function resetAll() {
      document.getElementById('bill').value       = '';
      document.getElementById('custom-tip').value = '';
      document.getElementById('people').value     = '';
 
      document.getElementById('bill-error').textContent   = '';
      document.getElementById('tip-error').textContent    = '';
      document.getElementById('people-error').textContent = '';
 
      document.getElementById('tip-amount').textContent  = 'Rs 0.00';
      document.getElementById('grand-total').textContent = 'Rs 0.00';
      document.getElementById('per-person').textContent  = 'Rs 0.00';
 
      var buttons = document.querySelectorAll('.tip-btn');
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      document.querySelector('[onclick="selectTip(15, this)"]').classList.add('active');
      tipPercent = 15;
    }