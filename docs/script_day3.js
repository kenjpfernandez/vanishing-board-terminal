document.addEventListener("DOMContentLoaded", function () {

  console.log("Day 3 loaded");

  // ===== LOCK SYSTEM =====
  if (!localStorage.getItem("day2Complete")) {
    blockAccess(Date.now() + 999999999);
    return;
  }

  const unlockTime = localStorage.getItem("day3Unlock");

  if (!unlockTime) {
    blockAccess(Date.now() + 60000);
    return;
  }

  const unlock = parseInt(unlockTime);
  const now = Date.now();

  if (now < unlock) {
    blockAccess(unlock);
    return;
  }

  console.log("Unlocked → Day 3 active");

  // ===== SAFE TEAM DISPLAY =====
  const team = localStorage.getItem("teamName") || "UNKNOWN";
  const teamEl = document.getElementById("teamDisplay");
  if (teamEl) {
    teamEl.innerHTML = `> Team: ${team}`;
  }

  // ===== BUTTON HANDLING (SAFE) =====
  const btn = document.querySelector("button");

  if (!btn) {
    console.error("Submit button not found");
    return;
  }

  btn.addEventListener("click", handleSubmit);

  // Optional: Enter key support
  document.getElementById("codeInput")?.addEventListener("keypress", function(e) {
    if (e.key === "Enter") handleSubmit();
  });

});


// ===== MAIN SUBMIT FUNCTION =====
function handleSubmit() {

  console.log("BUTTON CLICKED");

  const inputEl = document.getElementById("codeInput");
  const response = document.getElementById("response");

  if (!inputEl || !response) {
    console.error("Missing input or response element");
    return;
  }

  const code = inputEl.value.trim().toUpperCase();

  console.log("INPUT:", code);

  if (code === "EXEC-04") {
    win("individual");
  }
  else if (code === "APPROVEDALL") {
    win("collective");
  }
  else if (code === "SYSTEMBREACH") {
    win("system");
  }
  else {
    response.innerHTML = "✖ INVALID CONCLUSION";
  }

  inputEl.value = "";
}


// ===== WIN HANDLER =====
function win(type) {

  console.log("WIN PATH:", type);

  localStorage.setItem("day3Complete", "true");
  localStorage.setItem("day3Result", type); // track outcome

  if (type === "individual") {
    window.location.href = "puzzles/day3_individual.html";
  }
  else if (type === "collective") {
    window.location.href = "puzzles/day3_collective.html";
  }
  else if (type === "system") {
    window.location.href = "puzzles/day3_system.html";
  }
}


// ===== LOCK SCREEN =====
function blockAccess(unlockTime) {

  function render() {
    const remaining = unlockTime - Date.now();

    if (remaining <= 0) {
      location.reload();
      return;
    }

    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);

    document.body.innerHTML = `
      <div class="terminal">
        <h1>ACCESS RESTRICTED</h1>
        <p>> Final phase locked</p>
        <p>> Unlock in:</p>
        <h2>${h}h ${m}m ${s}s</h2>
        <p>> Do not attempt override.</p>
      </div>
    `;
  }

  render();
  setInterval(render, 1000);
}
