function continuePage() {
    const user = document.getElementById("username").value;

    if (user === "") {
        alert("Please enter your username.");
        return;
    }

    alert("Welcome, " + user + "!");
}
