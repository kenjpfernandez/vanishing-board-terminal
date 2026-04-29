// ===== TEAM DISPLAY =====
const team = localStorage.getItem("teamName") || "UNKNOWN";
const teamEl = document.getElementById("teamDisplay");
if (teamEl) {
teamEl.innerHTML = `> Team: ${team}`;
}

// ===== PROGRESS =====
let progress = {
code1: false,
code2: false,
code3: false
};

function updateProgress() {
const el = document.getElementById("progress");
if (!el) return;

const count = Object.values(progress).filter(v => v).length;
el.innerHTML = `Progress: ${count} / 3 Evidence Verified`;
}

// ===== MAIN FUNCTION =====
function checkCode() {
const code = document.getElementById("codeInput").value.trim().toUpperCase();
const response = document.getElementById("response");

console.log("DAY 2 CODE:", code);

// CODE 1
if(code === "0315" && !progress.code1) {
progress.code1 = true;
response.innerHTML = "✔ Revised Timeline Accepted → Calendar Unlocked";

```
const el = document.getElementById("mod2");
el.classList.remove("locked");
el.innerHTML = `<a href="https://your-day2-calendar-link" target="_blank">[2] Calendar System</a>`;
```

}

// CODE 2
else if(code === "18:45" && !progress.code2) {
progress.code2 = true;
response.innerHTML = "✔ Clean Time Slot Identified → Finance Unlocked";

```
const el = document.getElementById("mod3");
el.classList.remove("locked");
el.innerHTML = `<a href="https://your-day2-finance-link" target="_blank">[3] Financial Records</a>`;
```

}

// CODE 3
else if(code === "ACCT-9913" && !progress.code3) {
progress.code3 = true;
response.innerHTML = "✔ Escalated Transaction Flagged → HR Unlocked";

```
const el = document.getElementById("mod4");
el.classList.remove("locked");
el.innerHTML = `<a href="https://your-day2-hr-link" target="_blank">[4] HR Database</a>`;
```

}

// FINAL
else if(code === "TRUSTNOTHING") {

```
if(progress.code1 && progress.code2 && progress.code3) {
  response.innerHTML = "⚠ SYSTEM OVERRIDE...";
  setTimeout(() => {
    window.location.href = "puzzles/day2_end.html";
  }, 1500);
} else {
  response.innerHTML = "✖ DATA INCOMPLETE — CONFLICT DETECTED";
}
```

}

else {
response.innerHTML = "✖ INVALID OR COMPROMISED INPUT";
}

document.getElementById("codeInput").value = "";
updateProgress();

// Optional intrusion trigger
if(progress.code1 && progress.code2) {
setTimeout(() => {
alert("⚠ Unauthorized data modification detected.");
}, 500);
}
}
