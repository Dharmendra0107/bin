function sendEmail() {
  const nameField = document.getElementById('name').value;
  const emailField = document.getElementById('email').value;
  const phoneField = document.getElementById('phone').value;
  const messageField = document.getElementById('message').value;

  const emailPattern = /^[a-z0-9._%+-]+@gmail\.com$/;
  const phonePattern = /^\d{10}$/;
  const namePattern = /^[a-zA-Z\s]+$/;

  // Check if all fields match their patterns
  if (!namePattern.test(nameField)) {
    alert("Please enter a valid name (letters and spaces only).");
    return;
  }
  if (!emailPattern.test(emailField)) {
    alert("Please enter a valid Gmail address.");
    return;
  }
  if (!phonePattern.test(phoneField)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // If everything is valid, you can proceed with further logic
  alert("Form validated successfully!");
  resetForm();
}

// Reset form function
function resetForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';
}
