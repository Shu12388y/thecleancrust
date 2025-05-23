const button = document.getElementById("proposal");

button.addEventListener("click", () => {
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
      return res.text()
    })
    .then((data) => {
      button.innerHTML = "Thanks for accepting the propsal"
      button.disabled = true
      console.log(data)
    })
    .catch((err) => {
      button.innerHTML = "Something went wrong contact: contact@highoncontent.com"
    });
}
