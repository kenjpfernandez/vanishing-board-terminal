document.addEventListener("DOMContentLoaded", function () {

// ===== ACCESS CONTROL =====
const unlockTime = localStorage.getItem("day2Unlock");

if (!unlockTime) {
blockAccess(Date.now() + 3600000); // fallback: 1 hour
return;
}

const unlock = parseInt(unlockTime);
const now = Date.now();

if (now < unlock) {
blockAccess(unlock);
return;
}

// ===== NORMAL DAY 2 EXECUTION =====

// TEAM DISPLAY
const team = localStorage.getItem("teamName") || "UNKNOWN";
const teamEl = document.getElementById("teamDisplay");
if (teamEl) {
teamEl.innerHTML = `> Team: ${team}`;
}

// PROGRESS
let progress = {
code1: false,
code2: false,
code3: false
};

function updateProgress() {
const el = document.getElementById("progress");
if (!el) return;

```
const count = Object.values(progress).filter(v => v).length;
el.innerHTML = `Progress: ${count} / 3 Evidence Verified`;
```

}

// BUTTON EVENT
document.querySelector("button").addEventListener("click", function () {

```
const code = document.getElementById("codeInput").value.trim().toUpperCase();
const response = document.getElementById("response");

console.log("DAY 2 CODE:", code);

if(code === "0315") {
  progress.code1 = true;
  response.innerHTML = "✔ Revised Timeline Accepted → Calendar Unlocked";

  document.getElementById("mod2").innerHTML =
    `<a href="YOUR-DAY2-CALENDAR-LINK" target="_blank">[2] Calendar System</a>`;
}

else if(code === "18:45") {
  progress.code2 = true;
  response.innerHTML = "✔ Clean Time Slot Identified → Finance Unlocked";

  document.getElementById("mod3").innerHTML =
    `<a href="YOUR-DAY2-FINANCE-LINK" target="_blank">[3] Financial Records</a>`;
}

else if(code === "ACCT-9913") {
  progress.code3 = true;
  response.innerHTML = "✔ Escalated Transaction Flagged → HR Unlocked";

  document.getElementById("mod4").innerHTML =
    `<a href="YOUR-DAY2-HR-LINK" target="_blank">[4] HR Database</a>`;
}

else if(code === "TRUSTNOTHING") {

  if(progress.code1 && progress.code2 && progress.code3) {
    response.innerHTML = "⚠ SYSTEM OVERRIDE...";
    setTimeout(() => {
      window.location.href = "puzzles/day2_end.html";
    }, 1500);
  } else {
    response.innerHTML = "✖ DATA INCOMPLETE — CONFLICT DETECTED";
  }
}

else {
  response.innerHTML = "✖ INVALID OR COMPROMISED INPUT";
}

document.getElementById("codeInput").value = "";
updateProgress();

// Optional suspense event
if(progress.code1 && progress.code2) {
  setTimeout(() => {
    alert("⚠ Unauthorized data modification detected.");
  }, 500);
}
```

});

});

// ===== IMMERSIVE LOCK SYSTEM =====
function blockAccess(unlockTime) {

function render() {
const now = Date.now();
const remaining = unlockTime - now;

```
if (remaining <= 0) {
  location.reload();
  return;
}

const hours = Math.floor(remaining / (1000 * 60 * 60));
const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

document.body.innerHTML = `
  <div class="terminal">
    <h1>ACCESS RESTRICTED</h1>

    <p>> Verifying credentials...</p>
    <p>> Cross-checking authorization logs...</p>
    <p style="color:red;">> ERROR: Authorization denied</p>

    <br>

    <p>> Unauthorized attempt detected</p>
    <p>> Activity has been logged</p>

    <br>

    <p>> System override locked</p>
    <p>> Next phase unlock in:</p>

    <h2>${hours}h ${minutes}m ${seconds}s</h2>

    <br>

    <p>> Do not attempt repeated access.</p>
  </div>
`;
```

}

render();
setInterval(render, 1000);

// Suspicion message
setTimeout(() => {
const el = document.querySelector(".terminal");
if (el) {
const warn = document.createElement("p");
warn.style.color = "red";
warn.innerHTML = "> External monitoring detected...";
el.appendChild(warn);
}
}, 5000);
}
