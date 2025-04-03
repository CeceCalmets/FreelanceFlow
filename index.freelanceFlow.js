document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("CJ6WqJVriB28eSM_N"); // Replace with your EmailJS public key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.send("service_7ibhl1b", "template_sek5ct2", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        })
        .then(function (response) {
            document.getElementById("status").innerText = "Message sent successfully!";
        })
        .catch(function (error) {
            document.getElementById("status").innerText = "Failed to send message.";
        });
    });
});
