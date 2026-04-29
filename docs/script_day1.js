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
window.onload = function() {

  const team = localStorage.getItem("teamName") || "UNKNOWN";
  const teamEl = document.getElementById("teamDisplay");
  if (teamEl) {
    teamEl.innerHTML = `> Team: ${team}`;
  }

  document.getElementById("submitBtn").addEventListener("click", function () {

    const code = document.getElementById("codeInput").value.trim().toUpperCase();
    const response = document.getElementById("response");

    console.log("CODE ENTERED:", code);

    if (code === "0412") {
      response.innerHTML = "✔ Calendar Unlocked";

      const el = document.getElementById("mod2");
      el.classList.remove("locked");
      el.innerHTML = `<a href="https://thermofisher-my.sharepoint.com/:f:/p/kennethjay_fernandez/IgD1SblGIzxNQ6TZ1Foftn-cAcBh_9Al9knRBjzr4f9mEYg?e=MpCGgl" target="_blank">[2] Calendar System</a>`;

    } else if (code === "19:00") {
      response.innerHTML = "✔ Finance Unlocked";

      const el = document.getElementById("mod3");
      el.classList.remove("locked");
      el.innerHTML = `<a href="https://thermofisher-my.sharepoint.com/:f:/p/kennethjay_fernandez/IgDgTUmNrPITSrHUUBdY9iJSAQYPRUNoMTiKlcXH1S1AHBs?e=efYdZj" target="_blank">[3] Financial Records</a>`;

    } else if (code === "ACCT-7781") {
      response.innerHTML = "✔ HR Unlocked";

      const el = document.getElementById("mod4");
      el.classList.remove("locked");
      el.innerHTML = `<a href="https://thermofisher-my.sharepoint.com/:f:/p/kennethjay_fernandez/IgDJIhaZCRjAQJWyCGulDOH9Aa3V19mCeqF7ehQZgKj4VDI?e=QdffW7" target="_blank">[4] HR Database</a>`;

    } else {
      response.innerHTML = "✖ INVALID CODE";
    }

    document.getElementById("codeInput").value = "";
  });

};
