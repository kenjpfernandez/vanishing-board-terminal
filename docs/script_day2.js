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

    if(code === "0315") {
      response.innerHTML = "✔ Calendar Unlocked";
      document.getElementById("mod2").innerHTML =
        `<a href="YOUR-DAY2-CALENDAR" target="_blank">[2] Calendar System</a>`;
    }

    else if(code === "18:45") {
      response.innerHTML = "✔ Finance Unlocked";
      document.getElementById("mod3").innerHTML =
        `<a href="YOUR-DAY2-FINANCE" target="_blank">[3] Financial Records</a>`;
    }

    else if(code === "ACCT-9913") {
      response.innerHTML = "✔ HR Unlocked";
      document.getElementById("mod4").innerHTML =
        `<a href="YOUR-DAY2-HR" target="_blank">[4] HR Database</a>`;
    }

    else if(code === "TRUSTNOTHING") {
      window.location.href = "puzzles/day2_end.html";
    }

    else {
      response.innerHTML = "✖ INVALID CODE";
    }

    document.getElementById("codeInput").value = "";
    updateProgress();
  });

});
