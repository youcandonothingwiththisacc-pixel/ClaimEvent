// ----- script.js -----
(function() {
  // ----- DOM refs -----
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');

  const proceedToAmountBtn = document.getElementById('proceedToAmountBtn');
  const proceedToVerifyBtn = document.getElementById('proceedToVerifyBtn');
  const verifyNowBtn = document.getElementById('verifyNowBtn');

  const usernameInput = document.getElementById('usernameInput');
  const platformSelect = document.getElementById('platformSelect');
  const amountOptions = document.querySelectorAll('.amount-btn');
  const selectedAmountDisplay = document.getElementById('selectedAmountDisplay');
  const verifyAmountDisplay = document.getElementById('verifyAmountDisplay');
  const bigRobuxAmount = document.getElementById('bigRobuxAmount');
  const verifyUsername = document.getElementById('verifyUsername');

  // ----- state -----
  let selectedUsername = 'User';
  let selectedAmount = '1700 Robux';

  // ----- helper: update amount UI -----
  function updateAmountUI(amountStr) {
    selectedAmount = amountStr;
    selectedAmountDisplay.textContent = amountStr;
    verifyAmountDisplay.textContent = amountStr;
    const digits = amountStr.replace(/\D/g, '');
    bigRobuxAmount.textContent = digits || '1700';
  }

  // ----- helper: update username display -----
  function updateUsernameDisplay() {
    const name = usernameInput.value.trim();
    selectedUsername = name || 'User';
    verifyUsername.textContent = selectedUsername;
  }

  // ----- STEP 1 → STEP 2: proceed -----
  proceedToAmountBtn.addEventListener('click', function() {
    // update username before moving to step 2
    updateUsernameDisplay();
    
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
  });

  // Allow Enter key on username input
  usernameInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      proceedToAmountBtn.click();
    }
  });

  // Update username in real-time as user types (for preview)
  usernameInput.addEventListener('input', function() {
    updateUsernameDisplay();
  });

  // ----- STEP 2: amount selection -----
  amountOptions.forEach(btn => {
    btn.addEventListener('click', function(e) {
      amountOptions.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const amount = this.getAttribute('data-amount');
      if (amount) {
        updateAmountUI(amount);
      }
    });
  });

  // proceed button: go to step 3 (verification)
  proceedToVerifyBtn.addEventListener('click', function() {
    // sync amount from active button
    const activeAmount = document.querySelector('.amount-btn.active');
    if (activeAmount) {
      const amt = activeAmount.getAttribute('data-amount') || '1700 Robux';
      updateAmountUI(amt);
    } else {
      updateAmountUI('1700 Robux');
    }
    // ensure username is up to date
    updateUsernameDisplay();

    step2.classList.add('hidden');
    step3.classList.remove('hidden');
  });

  // ----- STEP 3: VERIFY NOW → CPA OFFERWALL -----
  verifyNowBtn.addEventListener('click', function(e) {
    // redirect to your CPA offerwall
    window.location.href = 'https://locked-content.com/?9ded58f';
  });

  // ----- initialization: set defaults -----
  updateAmountUI('1700 Robux');
  verifyUsername.textContent = 'User';
  usernameInput.placeholder = 'Enter your username...';
  
  // Update username display on page load if there's a value
  updateUsernameDisplay();

  console.log('Landing ready — 3-step flow, CPA redirect on Verify Now');
})();
