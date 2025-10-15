const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // voorkomt dat de pagina herlaadt

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("Bedankt voor je bericht! 😊");
      form.reset(); // maakt het formulier leeg
    } else {
      alert("Oeps! Er ging iets mis bij het verzenden. Probeer het opnieuw.");
    }
  });
});