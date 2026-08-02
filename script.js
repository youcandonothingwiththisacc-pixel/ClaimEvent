let selectedReward = "";

function selectReward(type) {
    selectedReward = type;

    document.querySelectorAll(".option").forEach(btn => {
        btn.style.background = "#1d1d2f";
    });

    event.target.style.background = "#6b00ff";
}

function continuePage() {
    const user = document.getElementById("username").value;

    if (user === "") {
        alert("Please enter your username.");
        return;
    }

    if (selectedReward === "") {
        alert("Please select an option.");
        return;
    }

   window.location.href = "https://locked-content.com/?9ded58f";
}
