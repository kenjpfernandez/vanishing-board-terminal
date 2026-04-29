function checkCode() {
const code = document.getElementById("codeInput").value.trim().toUpperCase();
const response = document.getElementById("response");

if(code === "0412") {
response.innerHTML = "✔ Meeting Time Verified";
}
else if(code === "19:00") {
response.innerHTML = "✔ Calendar Conflict Logged";
}
else if(code === "ACCT-7781") {
response.innerHTML = "✔ Financial Anomaly Detected";
}
else if(code === "SILENTDIRECTIVE") {
response.innerHTML = "⚠ ACCESS GRANTED: Opening Restricted Files...";
setTimeout(() => {
window.location.href = "puzzles/day1_end.html";
}, 2000);
}
else {
response.innerHTML = "✖ INVALID CODE";
}
}
