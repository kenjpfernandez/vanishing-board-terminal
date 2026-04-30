document.addEventListener("DOMContentLoaded", function () {

  console.log("Day 3 script loaded");

  // ===== LOCK SYSTEM =====

  if (!localStorage.getItem("day2Complete")) {
    console.log("Blocked: Day 2 not completed");
    blockAccess(Date.now() + 999999999);
    return;
  }

  const unlockTime = localStorage.getItem("day3Unlock");

  if (!unlockTime) {
    console.log("No unlock time found → fallback lock");
    blockAccess(Date.now() + 60000);
    return;
  }

  const unlock = parseInt(unlockTime);
  const now = Date.now();

  if (now < unlock) {
    console.log("Still locked until:", unlock);
    blockAccess(unlock);
    return;
  }

  console.log("Unlocked → Day 3 active");

  // ===== TEAM DISPLAY =====

  const team = localStorage.getItem("teamName") || "UNKNOWN";
  const teamEl = document.getElementById("teamDisplay");

  if (teamEl) {
    teamEl.innerHTML = `> Team: ${team}`;
  }

  // ===== BUTTON HANDLING (FIXED) =====

  const btn = document.querySelector("button");
  const inputEl = document.getElementById("codeInput");

  if (!btn || !inputEl) {
    console.error("Missing button or input");
    return;
  }

  // 🔥 IMPORTANT: remove any previous bindings
  btn.onclick = handleSubmit;

  // Enter key support
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  });

});


// ===== MAIN SUBMIT FUNCTION =====

function handleSubmit() {

  console.log("Submit triggered");

  const inputEl = document.getElementById("codeInput");
  const response = document.getElementById("response");

  if (!inputEl || !response) {
    console.error("Missing input or response element");
    return;
  }

  const code = inputEl.value.trim().toUpperCase();

  console.log("Input received:", code);

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

  console.log("Winning path:", type);

  localStorage.setItem("day3Complete", "true");
  localStorage.setItem("day3Result", type);

  let target = "";

  if (type === "individual") {
    target = "puzzles/day3_individual.html";
  }
  else if (type === "collective") {
    target = "puzzles/day3_collective.html";
  }
  else if (type === "system") {
    target = "puzzles/day3_system.html";
  }

  window.location.href = target;
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

        <p>> Verifying authorization...</p>
        <p>> Cross-checking records...</p>

        <p style="color:red;">> ERROR: Access denied</p>

        <br>

        <p>> Final phase locked</p>
        <p>> Unlock in:</p>

        <h2>${h}h ${m}m ${s}s</h2>

        <br>

        <p>> Do not attempt override.</p>
      </div>
    `;
  }

  render();
  setInterval(render, 1000);
}
