const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const sendButton = document.getElementById("sendButton");
const message = document.getElementById("message");

// Initialize EmailJS with your public key.
// Replace the placeholder with your actual key.
emailjs.init({
	publicKey: "YOUR_PUBLIC_KEY"
});

form.addEventListener("submit", async function (event) {
	// Stop the page from refreshing.
	event.preventDefault();

	const recipientEmail = emailInput.value.trim();

	// Check that an email address was entered.
	if (!recipientEmail) {
		message.textContent = "Please enter an email address.";
		return;
	}

	// Prevent duplicate clicks while sending.
	sendButton.disabled = true;
	sendButton.textContent = "Sending...";
	message.textContent = "Sending your email...";

	try {
		await emailjs.send(
			"YOUR_SERVICE_ID",
			"YOUR_TEMPLATE_ID",
			{
				to_email: recipientEmail,
				to_name: recipientEmail,
				message: "Thank you for receiving this HTML email!"
			}
		);

		message.textContent = "Email sent successfully!";
		form.reset();
	} catch (error) {
		console.error("Email sending error:", error);
		message.textContent =
			"Email could not be sent. Please check your email service settings.";
	} finally {
		sendButton.disabled = false;
		sendButton.textContent = "Send Email";
	}
});
