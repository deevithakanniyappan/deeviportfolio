document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Simple client-side form submission handler
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name && email && message) {
    document.getElementById("formResponse").textContent = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("formResponse").textContent = "Please fill out all fields.";
  }
});
