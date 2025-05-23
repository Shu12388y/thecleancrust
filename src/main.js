const button = document.getElementById("proposal");

button.addEventListener("click", () => {
  // Disable immediately to prevent double-clicks
  button.disabled = true;
  button.innerHTML = "Sending...";

  sendNotification();
});

function sendNotification() {
  const formData = new URLSearchParams();
  formData.append("message", "Accepted proposal");

  fetch("https://hooks.zapier.com/hooks/catch/23058465/2jmm4se/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to send");
      return res.text();
    })
    .then((data) => {
      button.innerHTML = "Thanks for accepting the proposal";
    })
    .catch((err) => {
      // Re-enable the button so user can try again
      button.disabled = false;
      button.innerHTML =
        "Something went wrong. Contact: contact@highoncontent.com";
    });
}
