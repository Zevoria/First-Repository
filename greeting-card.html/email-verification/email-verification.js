// Get the email input from the HTML
const emailInput = document.getElementById("emailInput");

// Get the Verify button
const verifyButton = document.getElementById("verifyButton");

// Get the message area
const message = document.getElementById("message");

// Run this code when the user clicks the button
verifyButton.addEventListener("click", function () {
	// Get what the user typed
	const email = emailInput.value.trim();

	// Check if the email contains basic email characters
	if (email === "") {
		// User didn't enter anything
		message.textContent = "Please enter an email address.";
		message.style.color = "red";
	} else if (!email.includes("@")) {
		// Email does not contain @
		message.textContent = "Please enter a valid email address.";
		message.style.color = "red";
	} else if (!email.includes(".")) {
		// Email does not contain a period
		message.textContent = "Email should contain a domain, such as .com.";
		message.style.color = "red";
	} else {
		// Email passed our basic checks
		message.textContent = "Email address looks valid!";
		message.style.color = "green";
	}
});
