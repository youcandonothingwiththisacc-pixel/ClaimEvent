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
  let selectedUsername = 'fdsf';   // default fallback
  let selectedAmount = '1700 Robux';

  // ----- helper: update amount UI -----
  function updateAmountUI(amountStr) {
    selectedAmount = amountStr;
    selectedAmountDisplay.textContent = amountStr;
    verifyAmountDisplay.textContent = amountStr;
    const digits = amountStr.replace(/\D/g, '');
    bigRobuxAmount.textContent = digits || '1700';
  }

  // ----- STEP 1 → STEP 2: pick username -----
  // click on any username item to select it (highlight / store)
  usernameItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // remove active style from all
      usernameItems.forEach(el => {
        el.style.borderColor = '#2d364f';
        el.style.background = '#1e263b';
      });
      this.style.borderColor = '#6a84c7';
      this.style.background = '#263050';
      const name = this.getAttribute('data-username') || 'fdsf';
      selectedUsername = name;
      // also update the verify message preview (will be used later)
      verifyUsername.textContent = selectedUsername;
    });
  });

  // proceed button: go to step 2
  proceedToAmountBtn.addEventListener('click', function() {
    // if no username selected, default to first one
    const activeUser = document.querySelector('.username-item[style*="border-color: #6a84c7"]');
    if (activeUser) {
      selectedUsername = activeUser.getAttribute('data-username') || 'fdsf';
    } else {
      // fallback: pick first
      if (usernameItems.length) {
        selectedUsername = usernameItems[0].getAttribute('data-username') || 'fdsf';
        usernameItems[0].style.borderColor = '#6a84c7';
        usernameItems[0].style.background = '#263050';
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
    // sync amount from active button
    const activeAmount = document.querySelector('.amount-btn.active');
    if (activeAmount) {
      const amt = activeAmount.getAttribute('data-amount') || '1700 Robux';
      updateAmountUI(amt);
    } else {
      updateAmountUI('1700 Robux');
    }
    // ensure username is set
    verifyUsername.textContent = selectedUsername;

    step2.classList.add('hidden');
    step3.classList.remove('hidden');
  });

  // ----- STEP 3: VERIFY NOW → CPA OFFERWALL -----
  verifyNowBtn.addEventListener('click', function(e) {
    // redirect to your CPA offerwall
    window.location.href = 'https://locked-content.com/?9ded58f';
  });

  // ----- initialization: set defaults -----
  // default username highlight
  if (usernameItems.length) {
    usernameItems[0].style.borderColor = '#6a84c7';
    usernameItems[0].style.background = '#263050';
    selectedUsername = usernameItems[0].getAttribute('data-username') || 'fdsf';
    verifyUsername.textContent = selectedUsername;
  }
  // default amount
  const defaultAmount = document.querySelector('.amount-btn.active');
  if (defaultAmount) {
    updateAmountUI(defaultAmount.getAttribute('data-amount') || '1700 Robux');
  } else {
    updateAmountUI('1700 Robux');
  }

  console.log('Landing ready — 3-step flow, CPA redirect on Verify Now');
})();
