const EMAIL = "camillebalala8@gmail.com";


/* ---------- 1. Navbar turns dark when scrolled ---------- */
function checkScroll() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("scrolled", window.scrollY > 40);
}


/* ---------- 2. Contact form ---------- */
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
  event.preventDefault();                 // stop the page from reloading
  form.classList.add("was-validated");    // show Bootstrap's red/green fields

  if (!form.checkValidity()) {
    formStatus.textContent = "Please fix the highlighted fields.";
    return;
  }

  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const message = document.getElementById("cMessage").value.trim();

  // Open an email addressed to me (no server needed)
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\n- " + name + " (" + email + ")");
  window.location.href = "mailto:" + EMAIL + "?subject=" + subject + "&body=" + body;

  formStatus.textContent = "Thank you! Opening your email app...";
  form.reset();
  form.classList.remove("was-validated");
});


/* ---------- 3. Start ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("scroll", checkScroll);
checkScroll();
