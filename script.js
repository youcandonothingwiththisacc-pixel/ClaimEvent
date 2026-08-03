function redeem() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();

    if (!username) {
        alert("🍬 Please enter your Roblox username.");
        usernameInput.focus();
        return;
    }

    // Save the username locally
    localStorage.setItem("username", username);

    // Show the next section of your app/site
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("questPage").style.display = "flex";
}
