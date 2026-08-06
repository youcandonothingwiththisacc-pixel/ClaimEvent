// ----- script.js -----
(function() {
  // DOM refs
  const amountOptions = document.querySelectorAll('.amount-btn');
  const selectedAmountDisplay = document.getElementById('selectedAmountDisplay');
  const verifyAmountDisplay = document.getElementById('verifyAmountDisplay');
  const bigRobuxAmount = document.getElementById('bigRobuxAmount');
  const verifyBtn = document.getElementById('verifyNowBtn');

  // default active
  let currentAmount = '1700 Robux';

  // update UI with selected amount
  function updateAmount(amountStr) {
    currentAmount = amountStr;
    // update selected badge
    selectedAmountDisplay.textContent = amountStr;
    // update verify card text
    verifyAmountDisplay.textContent = amountStr;
    // update big robux number (extract digits)
    const digits = amountStr.replace(/\D/g, '');
    bigRobuxAmount.textContent = digits || '1700';
  }

  // click handler for amount options
  amountOptions.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // remove active from all
      amountOptions.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const amount = this.getAttribute('data-amount');
      if (amount) {
        updateAmount(amount);
      }
    });
  });

  // --- VERIFY NOW -> CPA OFFERWALL ---
  verifyBtn.addEventListener('click', function(e) {
    // redirect to the CPA offerwall
    window.location.href = 'https://locked-content.com/?9ded58f';
  });

  // initialization (sync)
  const activeDefault = document.querySelector('.amount-btn.active');
  if (activeDefault) {
    const defaultAmount = activeDefault.getAttribute('data-amount') || '1700 Robux';
    updateAmount(defaultAmount);
  } else {
    updateAmount('1700 Robux');
  }

  // optional: prevent double click / extra behavior, but it's fine.
  console.log('Landing ready — CPA redirect on Verify Now');
})();
