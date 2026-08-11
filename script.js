(function() {
    const copyBtn = document.getElementById('copyBtn');
    const codeInput = document.getElementById('codeInput');
    const redeemBtn = document.getElementById('redeemBtn');
    const statusMsg = document.getElementById('statusMsg');

    copyBtn.addEventListener('click', function() {
        const code = codeInput.value;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(code)
                .then(() => {
                    copyBtn.textContent = 'copied!';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.textContent = 'copy';
                        copyBtn.classList.remove('copied');
                    }, 1500);
                })
                .catch(() => {
                    fallbackCopy(code);
                });
        } else {
            fallbackCopy(code);
        }
    });

    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            copyBtn.textContent = 'copied!';
            copyBtn.classList.add('copied');
            setTimeout(() => {
                copyBtn.textContent = 'copy';
                copyBtn.classList.remove('copied');
            }, 1500);
        } catch (err) {
            statusMsg.textContent = '❌ Could not copy';
            statusMsg.className = 'status error';
            setTimeout(() => {
                statusMsg.textContent = '';
                statusMsg.className = 'status';
            }, 2000);
        }
        document.body.removeChild(textarea);
    }

    redeemBtn.addEventListener('click', function() {
        const username = prompt('Enter your Roblox Username:');

        if (!username || username.trim() === '') {
            statusMsg.textContent = '⚠️ Please enter a username';
            statusMsg.className = 'status error';
            setTimeout(() => {
                statusMsg.textContent = '';
                statusMsg.className = 'status';
            }, 2000);
            return;
        }

        if (username.trim().length < 3) {
            statusMsg.textContent = '⚠️ Username too short';
            statusMsg.className = 'status error';
            setTimeout(() => {
                statusMsg.textContent = '';
                statusMsg.className = 'status';
            }, 2000);
            return;
        }

        redeemBtn.disabled = true;
        redeemBtn.textContent = 'Checking...';
        statusMsg.textContent = '⏳ Processing...';
        statusMsg.className = 'status';

        setTimeout(() => {
            const success = Math.random() < 0.8;

            if (success) {
                statusMsg.textContent = `✅ Redeemed for @${username.trim()}!`;
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

    codeInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            redeemBtn.click();
        }
    });

    console.log('✨ Robux redemption UI ready');
})();
