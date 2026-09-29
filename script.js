const phoneInput = document.getElementById('phone_number');
const submitButton = document.getElementById('submitButton');
const consentBox = document.getElementById('consent');
phoneInput.addEventListener('input', checkInputs);
consentBox.addEventListener('change', checkInputs);
function checkInputs() {
  const phoneValid = phoneInput.value.length === 10;
  const consentChecked = consentBox.checked;
  submitButton.disabled = !(phoneValid && consentChecked);
}
const form = document.getElementById('submissionForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
    } else {
      alert("Something went wrong submitting the form — please try again.");
    }
  }).catch(() => {
    alert("Something went wrong submitting the form — please try again.");
  });
});
window.addEventListener('load', function () {
  document.getElementById('submissionForm').reset();
});
