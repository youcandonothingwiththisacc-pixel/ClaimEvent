// ----- script.js -----
(function() {
  // ----- DOM refs -----
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');

  const proceedToAmountBtn = document.getElementById('proceedToAmountBtn');
  const proceedToVerifyBtn = document.getElementById('proceedToVerifyBtn');
  const verifyNowBtn = document.getElementById('verifyNowBtn');

  const usernameItems = document.querySelectorAll('.username-item');
  const amountOptions = document.querySelectorAll('.amount-btn');
  const selectedAmountDisplay = document.getElementById('selectedAmountDisplay');
  const verifyAmountDisplay = document.getElementById('verifyAmountDisplay');
  const bigRobuxAmount = document.getElementById('bigRobuxAmount');
  const verifyUsername = document.getElementById('verifyUsername');

  // ----- state -----
  let selectedUsername = 'fdsf';
  let selectedAmount = '1700';

  // ----- helper: update amount UI -----
  function updateAmountUI(amountStr) {
    selectedAmount = amountStr;
    selectedAmountDisplay.textContent = amountStr;
    verifyAmountDisplay.textContent = amountStr;
    bigRobuxAmount.textContent = amountStr;
  }

  // ----- STEP 1 → STEP 2: pick username -----
  usernameItems.forEach(item => {
    item.addEventListener('click', function(e) {
      usernameItems.forEach(el => {
        el.style.borderColor = '#2d364f';
        el.style.background = '#1e263b';
      });
      this.style.borderColor = '#6a84c7';
      this.style.background = '#263050';
      const name = this.querySelector('span').textContent;
      if (name && name !== 'Your Username...') {
        selectedUsername = name;
        verifyUsername.textContent = selectedUsername;
      }
    });
  });

  // proceed button: go to step 2
  proceedToAmountBtn.addEventListener('click', function() {
    // Get selected username
    const activeUser = document.querySelector('.username-item[style*="border-color: #6a84c7"]');
    if (activeUser) {
      const name = activeUser.querySelector('span').textContent;
      if (name && name !== 'Your Username...') {
        selectedUsername = name;
      }
    }
    verifyUsername.textContent = selectedUsername;

    step1.classList.add('hidden');
    step2.classList.remove('hidden');
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
    const activeAmount = document.querySelector('.amount-btn.active');
    if (activeAmount) {
      const amt = activeAmount.getAttribute('data-amount') || '1700';
      updateAmountUI(amt);
    } else {
      updateAmountUI('1700');
    }
    verifyUsername.textContent = selectedUsername;

    step2.classList.add('hidden');
    step3.classList.remove('hidden');
  });

  // ----- STEP 3: VERIFY NOW → CPA OFFERWALL -----
  verifyNowBtn.addEventListener('click', function(e) {
    window.location.href = 'https://locked-content.com/?9ded58f';
  });

  // ----- initialization: set defaults -----
  updateAmountUI('1700');
  verifyUsername.textContent = 'fdsf';
  
  // Highlight first username as default
  if (usernameItems.length) {
    usernameItems[0].style.borderColor = '#6a84c7';
    usernameItems[0].style.background = '#263050';
    const firstName = usernameItems[0].querySelector('span').textContent;
    if (firstName && firstName !== 'Your Username...') {
      selectedUsername = firstName;
      verifyUsername.textContent = selectedUsername;
    }
  }

  console.log('Landing ready — 3-step flow, CPA redirect on Verify Now');
})();
