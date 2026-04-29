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

let progress = {
  code1: false,
  code2: false,
  code3: false
};

function unlockModule(id, link, label) {
  const el = document.getElementById(id);

  el.classList.remove("locked");

  el.innerHTML = `<a href="${link}" target="_blank">${label}</a>`;
}

function checkCode() {
  const code = document.getElementById("codeInput").value.trim().toUpperCase();
  const response = document.getElementById("response");

  if(code === "0412" && !progress.code1) {
  progress.code1 = true;
  response.innerHTML = "✔ Email Verified → Calendar Unlocked";

  unlockModule("mod2", "https://your-sharepoint-link/calendar", "[2] Calendar System");

} 
  
  else if(code === "19:00" && !progress.code2) {
  progress.code2 = true;
  response.innerHTML = "✔ Timeline Verified → Finance Unlocked";

  unlockModule("mod3", "https://your-sharepoint-link/finance", "[3] Financial Records");

} 
  
  else if(code === "ACCT-7781" && !progress.code3) {
  progress.code3 = true;
  response.innerHTML = "✔ Financial Record Verified → HR Unlocked";

  unlockModule("mod4", "https://your-sharepoint-link/hr", "[4] HR Database");

}

else if(code === "SILENTDIRECTIVE") {

    if(progress.code1 && progress.code2 && progress.code3) {
      response.innerHTML = "⚠ ACCESS GRANTED...";
      setTimeout(() => {
        window.location.href = "puzzles/day1_end.html";
      }, 1500);
    } else {
      response.innerHTML = "✖ INCOMPLETE DATA";
    }

  } else {
    response.innerHTML = "✖ INVALID CODE";
  }

  updateProgress();
}

function updateProgress() {
  const count = Object.values(progress).filter(v => v).length;
  document.getElementById("progress").innerHTML = 
    `Progress: ${count} / 3 Evidence Verified`;
}
