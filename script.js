// 🔍 Popup Functions (for future item preview popups if used)
function openPopup(text) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  if (popup && popupText) {
    popupText.textContent = text;
    popup.style.display = "flex";
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

// ✅ Report Form Submission Handler
const form = document.getElementById("report-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks! Your report has been submitted.");
    form.reset();
  });
}

// ❓ FAQ Toggle Show/Hide Logic
const faqs = document.querySelectorAll(".faq .faq-box h4");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    const answer = faq.nextElementSibling;
    answer.classList.toggle("show");
  });
});
