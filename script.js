function redeem() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();

    if (!username) {
        alert("Please enter your username.");
        usernameInput.focus();
        return;
    }

    // Save username (optional)
    localStorage.setItem("username", username);

    // Replace with your CPA/offer URL
    window.location.href = "https://locked-content.com/?9ded58f";
}
