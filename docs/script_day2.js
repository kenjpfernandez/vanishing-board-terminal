document.addEventListener("DOMContentLoaded", function () {

  console.log("Day 2 script loaded");

  // ===== CHECK UNLOCK =====
  const unlockTime = localStorage.getItem("day2Unlock");
  console.log("Stored unlockTime:", unlockTime);

  if (!unlockTime) {
    console.log("No unlock time found");
    blockAccess(Date.now() + 60000); // 1 min fallback
    return;
  }

  const unlock = parseInt(unlockTime);
  const now = Date.now();

  console.log("Now:", now, "Unlock:", unlock);

  if (now < unlock) {
    console.log("Still locked");
    blockAccess(unlock);
    return;
  }

  console.log("Unlocked → running Day 2");

  // ===== NORMAL DAY 2 =====

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

  // ===== BUTTON FIX (important) =====
  const btn = document.querySelector("button");

  if (!btn) {
    console.error("Button not found!");
    return;
  }

  btn.addEventListener("click", function () {

    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const response = document.getElementById("response");

    console.log("CODE:", code);

    if(code === "0315") {
      progress.code1 = true;
      response.innerHTML = "✔ Calendar Unlocked";

      document.getElementById("mod2").innerHTML =
        `<a href="YOUR-DAY2-CALENDAR-LINK" target="_blank">[2] Calendar System</a>`;
    }

    else if(code === "18:45") {
      progress.code2 = true;
      response.innerHTML = "✔ Finance Unlocked";

      document.getElementById("mod3").innerHTML =
        `<a href="YOUR-DAY2-FINANCE-LINK" target="_blank">[3] Financial Records</a>`;
    }

    else if(code === "ACCT-9913") {
      progress.code3 = true;
      response.innerHTML = "✔ HR Unlocked";

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
        response.innerHTML = "✖ INCOMPLETE DATA";
      }
    }

    else {
      response.innerHTML = "✖ INVALID CODE";
    }

    document.getElementById("codeInput").value = "";
    updateProgress();
  });

});


// ===== LOCK SCREEN =====
function blockAccess(unlockTime) {

  function render() {
    const now = Date.now();
    const remaining = unlockTime - now;

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
        <p>> Authorization denied</p>
        <p>> Next phase unlock in:</p>
        <h2>${hours}h ${minutes}m ${seconds}s</h2>
      </div>
    `;
  }

  render();
  setInterval(render, 1000);
}
