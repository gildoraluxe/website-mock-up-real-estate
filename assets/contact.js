document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const leads = JSON.parse(localStorage.getItem("leads")) || [];
  leads.push({
    name: name.value,
    email: email.value,
    message: message.value,
    score: 60
  });
  localStorage.setItem("leads", JSON.stringify(leads));
  alert("Message sent. We’ll be in touch.");
});
