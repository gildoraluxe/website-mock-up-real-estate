document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();

  const booking = {
    service: service.value,
    date: date.value,
    time: time.value,
    name: name.value,
    email: email.value,
    phone: phone.value,
    score: service.value.includes("Investment") ? 90 : 70
  };

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Booking confirmed. Our team will contact you shortly.");
  e.target.reset();
});
