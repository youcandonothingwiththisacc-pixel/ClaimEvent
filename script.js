(function() {
    "use strict";

    const copyBtn = document.getElementById('copyBtn');
    const usernameInput = document.getElementById('usernameInput');
    const redeemBtn = document.getElementById('redeemBtn');
    const statusMsg = document.getElementById('statusMsg');

    const FIXED_CODE = 'SECRET4';

    // ── Copy Button ──
    copyBtn.addEventListener('click', function() {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(FIXED_CODE)
                .then(function() {
                    copyBtn.textContent = 'copied!';
                    copyBtn.classList.add('copied');
                    setTimeout(function() {
                        copyBtn.textContent = 'copy';
                        copyBtn.classList.remove('copied');
                    }, 1500);
                })
                .catch(function() {
                    fallbackCopy();
                });
        } else {
            fallbackCopy();
        }
    });

    function fallbackCopy() {
        var ta = document.createElement('textarea');
        ta.value = FIXED_CODE;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            copyBtn.textContent = 'copied!';
            copyBtn.classList.add('copied');
            setTimeout(function() {
                copyBtn.textContent = 'copy';
                copyBtn.classList.remove('copied');
            }, 1500);
        } catch (err) {
            statusMsg.textContent = '❌ Could not copy';
            statusMsg.className = 'status error';
            setTimeout(function() {
                statusMsg.textContent = '';
                statusMsg.className = 'status';
            }, 2000);
        }
        document.body.removeChild(ta);
    }

    // ── Redeem Button ──
    redeemBtn.addEventListener('click', function() {
        var username = usernameInput.value.trim();
        statusMsg.className = 'status';

        if (!username) {
            statusMsg.textContent = '⚠️ Please enter your username';
            statusMsg.className = 'status error';
            setTimeout(function() {
                statusMsg.textContent = '';
                statusMsg.className = 'status';
            }, 2000);
            return;
        }

        if (username.length < 3) {
            statusMsg.textContent = '⚠️ Username too short (min 3 chars)';
            statusMsg.className = 'status error';
            setTimeout(function() {
                statusMsg.textContent = '';
                statusMsg.className = 'status';
            }, 2000);
            return;
        }

        redeemBtn.disabled = true;
        redeemBtn.textContent = 'Checking...';
        statusMsg.textContent = '⏳ Processing...';
        statusMsg.className = 'status';

        setTimeout(function() {
            var success = Math.random() < 0.8;

            if (success) {
                statusMsg.textContent = '✅ Redeemed for @' + username + '! +25,000 Robux';
                statusMsg.className = 'status success';
                redeemBtn.textContent = '✅ Done';
                redeemBtn.style.background = '#2ea043';
                redeemBtn.style.color = '#ffffff';
            } else {
                statusMsg.textContent = '❌ Code already used or invalid';
                statusMsg.className = 'status error';
                redeemBtn.disabled = false;
                redeemBtn.textContent = 'Redeem';
                redeemBtn.style.background = '#00b3ff';
                redeemBtn.style.color = '#0d1117';
            }
        }, 1200);
    });

    // ── Enter Key Support ──
    usernameInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            redeemBtn.click();
        }
    });

    console.log('✨ Robux redemption UI ready');
})();
