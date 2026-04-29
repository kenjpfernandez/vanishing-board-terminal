function login() {
const user = document.getElementById("username").value;
const pass = document.getElementById("password").value;
const response = document.getElementById("loginResponse");

if(user === "iciu_agent" && pass === "directive72") {
window.location.href = "terminal.html";
} else {
response.innerHTML = "ACCESS DENIED";
}
}

function checkCode() {
const code = document.getElementById("codeInput").value.trim().toUpperCase();
const response = document.getElementById("response");

if(code === "0412") {
response.innerHTML = "✔ Meeting Code Accepted";
}
else if(code === "19:00") {
response.innerHTML = "✔ Timestamp Verified";
}
else if(code === "ACCT-7781") {
response.innerHTML = "✔ Financial Record Flagged";
}
else if(code === "SILENTDIRECTIVE") {
response.innerHTML = "⚠ ACCESS GRANTED...";
setTimeout(() => {
window.location.href = "puzzles/day1_end.html";
}, 1500);
}
else {
response.innerHTML = "INVALID CODE";
}
}
