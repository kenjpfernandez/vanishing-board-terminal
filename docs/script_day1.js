function login() {
  const userEl = document.getElementById("username");
  const passEl = document.getElementById("password");
  const response = document.getElementById("loginResponse");

  if (!userEl || !passEl) return;

  const user = userEl.value;
  const pass = passEl.value;

  if(user === "iciu_agent" && pass === "directive72") {
    window.location.href = "terminal.html";
  } else {
    if (response) response.innerHTML = "ACCESS DENIED";
  }
}

// ===== SAFE INIT =====
document.addEventListener("DOMContentLoaded", function () {

  const team = localStorage.getItem("teamName") || "UNKNOWN";
  const teamEl = document.getElementById("teamDisplay");
  if (teamEl) {
    teamEl.innerHTML = `> Team: ${team}`;
  }

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

  document.querySelector("button").addEventListener("click", function () {

    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const response = document.getElementById("response");

    if(code === "0412") {
      response.innerHTML = "✔ Calendar Unlocked";
      document.getElementById("mod2").innerHTML =
        `<a href="YOUR-DAY1-CALENDAR" target="_blank">[2] Calendar System</a>`;
    }

    else if(code === "19:00") {
      response.innerHTML = "✔ Finance Unlocked";
      document.getElementById("mod3").innerHTML =
        `<a href="YOUR-DAY1-FINANCE" target="_blank">[3] Financial Records</a>`;
    }

    else if(code === "ACCT-7781") {
      response.innerHTML = "✔ HR Unlocked";
      document.getElementById("mod4").innerHTML =
        `<a href="YOUR-DAY1-HR" target="_blank">[4] HR Database</a>`;
    }

    else if(code === "SILENTDIRECTIVE") {
      window.location.href = "puzzles/day1_end.html";
    }

    else {
      response.innerHTML = "✖ INVALID CODE";
    }

    document.getElementById("codeInput").value = "";
    updateProgress();
  });

});
