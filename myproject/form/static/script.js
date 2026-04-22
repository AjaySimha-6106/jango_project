
JAVASCRIPT
document.getElementById("studentForm").addEventListener("submit", function(e) {
e.preventDefault();
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let age = document.getElementById("age").value.trim();
let course = document.getElementById("course").value;
let message = document.getElementById("message");
if (name === "" | email === "" | age === "" | course === "") {
message.style.color = "red";
message.innerText = "All fields are required!";
return;
}
if (age < 18) {
message.style.color = "red";
message.innerText = "Age must be 18+";
return;
}
message.style.color = "green";
message.innerText = "Form submitted successfully!";
// Clear form
document.getElementById("studentForm").reset();
});