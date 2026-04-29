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

// ===== TEAM DISPLAY =====
const team = localStorage.getItem("teamName") || "UNKNOWN";
document.getElementById("teamDisplay").innerHTML = `> Team: ${team}`;

// ===== PROGRESS =====
let progress = {
  code1: false,
  code2: false,
  code3: false
};

function updateProgress() {
  const count = Object.values(progress).filter(v => v).length;
  document.getElementById("progress").innerHTML =
    `Progress: ${count} / 3 Evidence Verified`;
}

// ===== UNLOCK FUNCTION =====
function unlockModule(id, link, label) {
  const el = document.getElementById(id);

  if (!el) {
    console.error("Module not found:", id);
    return;
  }

  el.classList.remove("locked");
  el.innerHTML = `<a href="${link}" target="_blank">${label}</a>`;
}

// ===== CODE SYSTEM =====
function checkCode() {
  const code = document.getElementById("codeInput").value.trim().toUpperCase();
  const response = document.getElementById("response");

  if(code === "0412" && !progress.code1) {
  progress.code1 = true;
  response.innerHTML = "✔ Meeting Code Verified → Calendar Unlocked";

  unlockModule(
    "mod2",
    "https://thermofisher-my.sharepoint.com/:f:/p/kennethjay_fernandez/IgD1SblGIzxNQ6TZ1Foftn-cAcBh_9Al9knRBjzr4f9mEYg?e=MpCGgl",
    "[2] Calendar System"
  );

} else if(code === "19:00" && !progress.code2) {
  progress.code2 = true;
  response.innerHTML = "✔ Timeline Conflict Logged → Finance Unlocked";

  unlockModule(
    "mod3",
    "https://thermofisher-my.sharepoint.com/:f:/p/kennethjay_fernandez/IgDgTUmNrPITSrHUUBdY9iJSAQYPRUNoMTiKlcXH1S1AHBs?e=efYdZj",
    "[3] Financial Records"
  );

} else if(code === "ACCT-7781" && !progress.code3) {
  progress.code3 = true;
  response.innerHTML = "✔ Financial Anomaly Flagged → HR Unlocked";

  unlockModule(
    "mod4",
    "https://thermofisher-my.sharepoint.com/:f:/p/kennethjay_fernandez/IgDJIhaZCRjAQJWyCGulDOH9Aa3V19mCeqF7ehQZgKj4VDI?e=QdffW7",
    "[4] HR Database"
  );
    
  } else if(code === "SILENTDIRECTIVE") {

    if(progress.code1 && progress.code2 && progress.code3) {
      response.innerHTML = "⚠ ACCESS GRANTED...";
      setTimeout(() => {
        window.location.href = "puzzles/day1_end.html";
      }, 1500);
    } else {
      response.innerHTML = "✖ INCOMPLETE DATA. MORE EVIDENCE REQUIRED.";
    }

  } else {
    response.innerHTML = "✖ INVALID OR ALREADY USED CODE";
  }

  document.getElementById("codeInput").value = "";
  updateProgress();
}
